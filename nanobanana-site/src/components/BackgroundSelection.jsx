import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import LoadingButton from './LoadingButton';
import ErrorMessage from './ErrorMessage';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const copy = {
  ja: {
    title: '背景画像選択',
    subtitle: 'Background Asset Merge',
    description: '任意の背景素材を指定して合成します。背景URLを入力してください。',
    backgroundLabel: '背景画像URL',
    backgroundPlaceholder: 'https://example.com/background.jpg',
    errorMissing: '商品画像と背景画像URLを入力してください',
    button: '背景を合成',
    loading: '処理中...',
  },
  en: {
    title: 'Background Asset Merge',
    subtitle: 'Background Asset Merge',
    description: 'Provide any background asset URL to composite behind your product.',
    backgroundLabel: 'Background Image URL',
    backgroundPlaceholder: 'https://example.com/background.jpg',
    errorMissing: 'Please upload the product image and enter the background URL',
    button: 'Composite Background',
    loading: 'Processing...',
  },
};

const BackgroundSelection = ({ onResult, baseUrl, setGlobalLoading, locale = 'ja' }) => {
  const text = copy[locale] || copy.ja;
  const [imageBase64, setImageBase64] = useState(null);
  const [backgroundUrl, setBackgroundUrl] = useState('');
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
    if (!imageBase64 || !backgroundUrl.trim()) {
      setError(text.errorMissing);
      return;
    }

    setLoading(true);
    setGlobalLoading?.(true);
    setError(null);
    const start = performance.now();

    try {
      const payload = { imageBase64, backgroundUrl: backgroundUrl.trim() };
      const response = await callWebhook(
        WEBHOOKS.ENDPOINTS.backgroundSelection,
        payload,
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
    <section aria-label="背景画像選択フォーム" className="bg-white/90 backdrop-blur-glass border border-white/50 rounded-16 shadow-glass p-24 md:p-32 space-y-24">
      <div>
        <div className="flex items-center gap-16 mb-16">
          <div className="flex items-center justify-center w-56 h-56 rounded-16 bg-gradient-to-br from-muted-teal to-sky-blue text-white text-2xl shadow-level-3">
            🖼️
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
          id="background-selection-image"
          label="商品画像"
          preview={imageBase64}
          onFileSelect={handleUpload}
          required
          locale={locale}
        />

        <div>
          <label htmlFor="backgroundUrl" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
            {text.backgroundLabel}
          </label>
          <input
            id="backgroundUrl"
            type="url"
            value={backgroundUrl}
            onChange={(event) => setBackgroundUrl(event.target.value)}
            className="w-full rounded-12 border border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal placeholder:text-medium-gray focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200"
            placeholder={text.backgroundPlaceholder}
          />
        </div>

        <ErrorMessage error={error} onDismiss={() => setError(null)} />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText={text.loading}
          icon="🖼️"
          className="w-full rounded-12 bg-muted-teal text-white px-24 py-14 text-sm font-semibold shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-medium-gray disabled:shadow-none transition-all duration-200"
        >
          {text.button}
        </LoadingButton>
      </form>
    </section>
  );
};

export default BackgroundSelection;
