import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import LoadingButton from './LoadingButton';
import ErrorMessage from './ErrorMessage';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const copy = {
  ja: {
    title: 'デザイン指示統合',
    subtitle: 'Design Instruction Hub',
    description: 'テキストと画像を組み合わせて、AIに具体的なデザイン指示を送信できます。',
    textLabel: 'テキスト指示',
    textPlaceholder: '例: ジャケットのラペルをシャープにし、袖口を短めに調整',
    imageHelper: '任意 / 参考画像があればアップロード',
    errorMissing: 'テキスト指示を入力してください',
    button: '指示を送信',
    loading: '処理中...',
  },
  en: {
    title: 'Design Instruction Hub',
    subtitle: 'Design Instruction Hub',
    description: 'Combine text and optional reference images to deliver precise direction to AI.',
    textLabel: 'Text instructions',
    textPlaceholder: 'e.g., sharpen the lapel, shorten the cuffs slightly',
    imageHelper: 'Optional / Upload if you have reference imagery',
    errorMissing: 'Please enter the text instructions',
    button: 'Send Instructions',
    loading: 'Processing...',
  },
};

const DesignInstruction = ({ onResult, baseUrl, setGlobalLoading, locale = 'ja' }) => {
  const text = copy[locale] || copy.ja;
  const [textInstructions, setTextInstructions] = useState('');
  const [imageBase64, setImageBase64] = useState(null);
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
    if (!textInstructions.trim()) {
      setError(text.errorMissing);
      return;
    }

    setLoading(true);
    setGlobalLoading?.(true);
    setError(null);
    const start = performance.now();

    try {
      const response = await callWebhook(
        WEBHOOKS.ENDPOINTS.designInstruction,
        {
          textInstructions: textInstructions.trim(),
          imageBase64,
        },
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
    <section aria-label="デザイン指示統合フォーム" className="bg-white/90 backdrop-blur-glass border border-white/50 rounded-16 shadow-glass p-24 md:p-32 space-y-24">
      <div>
        <div className="flex items-center gap-16 mb-16">
          <div className="flex items-center justify-center w-56 h-56 rounded-16 bg-gradient-to-br from-muted-teal to-dusty-purple text-white text-2xl shadow-level-3">
            📝
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
        <div>
          <label htmlFor="textInstructions" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
            {text.textLabel}
          </label>
          <textarea
            id="textInstructions"
            rows={4}
            value={textInstructions}
            onChange={(event) => setTextInstructions(event.target.value)}
            className="w-full rounded-12 border border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal placeholder:text-medium-gray focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200"
            placeholder={text.textPlaceholder}
          />
        </div>

        <ImageUploader
          id="instruction-image"
          label="参考画像（任意）"
          preview={imageBase64}
          onFileSelect={handleUpload}
          helperText={text.imageHelper}
          locale={locale}
        />

        <ErrorMessage error={error} onDismiss={() => setError(null)} />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText={text.loading}
          icon="📝"
          className="w-full rounded-12 bg-muted-teal text-white px-24 py-14 text-sm font-semibold shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-medium-gray disabled:shadow-none transition-all duration-200"
        >
          {text.button}
        </LoadingButton>
      </form>
    </section>
  );
};

export default DesignInstruction;
