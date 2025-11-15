import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import LoadingButton from './LoadingButton';
import ErrorMessage from './ErrorMessage';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const copy = {
  ja: {
    title: '画像レタッチ・修正',
    subtitle: 'Image Retouch',
    description: '汚れ消しや質感調整などの指示を入力し、商品画像を最適化します。',
    instructionsLabel: '編集指示',
    instructionsPlaceholder: '例: シワを減らし、明るさを+10、背景の影を弱くする',
    errorMissing: '画像と編集指示を入力してください',
    button: 'レタッチを実行',
    loading: '処理中...',
  },
  en: {
    title: 'Image Retouch',
    subtitle: 'Image Retouch',
    description: 'Describe the retouch instructions—remove stains, adjust brightness, etc.—and the image will be optimized.',
    instructionsLabel: 'Retouch instructions',
    instructionsPlaceholder: 'e.g., soften wrinkles, +10 brightness, reduce background shadows',
    errorMissing: 'Please upload the image and provide retouch instructions',
    button: 'Run Retouch',
    loading: 'Processing...',
  },
};

const ImageRetouch = ({ onResult, baseUrl, setGlobalLoading, locale = 'ja' }) => {
  const text = copy[locale] || copy.ja;
  const [imageBase64, setImageBase64] = useState(null);
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file) => {
    try {
      validateImageFile(file);
      const base64 = await imageToBase64(file);
      setImageBase64(base64);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!imageBase64 || !instructions.trim()) {
      setError(text.errorMissing);
      return;
    }

    setLoading(true);
    setGlobalLoading?.(true);
    setError(null);
    const start = performance.now();

    try {
      const response = await callWebhook(
        WEBHOOKS.ENDPOINTS.imageRetouch,
        { imageBase64, instructions: instructions.trim() },
        baseUrl,
      );
      const duration = (performance.now() - start) / 1000;
      onResult({ result: response, error: null, duration, source: text.title });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: text.title });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="画像レタッチフォーム" className="space-y-24">
      <div>
        <div className="flex items-center gap-16 mb-16">
          <div className="flex items-center justify-center w-56 h-56 rounded-16 bg-gradient-to-br from-muted-teal to-dusty-purple text-white text-2xl shadow-level-3">
            🛠️
          </div>
          <div>
            <h2 className="text-2xl font-bold text-charcoal">{text.title}</h2>
            <p className="text-xs text-medium-gray mt-4">{text.subtitle}</p>
          </div>
        </div>
        <p className="text-base leading-[26px] text-medium-gray">
          {text.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-20">
        <ImageUploader
          id="retouch-image"
          label="対象画像"
          preview={imageBase64}
          onFileSelect={handleUpload}
          required
          helperText="10MB以下 / JPG, PNG, WEBP"
          locale={locale}
        />

        <div>
          <label htmlFor="retouchInstructions" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
            {text.instructionsLabel}
          </label>
          <textarea
            id="retouchInstructions"
            rows={4}
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
            className="w-full rounded-12 border border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal placeholder:text-medium-gray focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200"
            placeholder={text.instructionsPlaceholder}
          />
        </div>

        <ErrorMessage error={error} onDismiss={() => setError(null)} />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText={text.loading}
          icon="🛠️"
          className="w-full rounded-12 bg-muted-teal text-white px-24 py-14 text-sm font-semibold shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-medium-gray disabled:shadow-none transition-all duration-200"
        >
          {text.button}
        </LoadingButton>
      </form>
    </section>
  );
};

export default ImageRetouch;
