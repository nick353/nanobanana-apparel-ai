import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import LoadingButton from './LoadingButton';
import ErrorMessage from './ErrorMessage';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const backgroundOptions = ['studio', 'outdoor', 'street', 'nature', 'custom'];

const copy = {
  ja: {
    title: '背景変更',
    subtitle: 'Background Switch',
    description: '商品被写体を維持したまま、背景のみを差し替えます。用途に合わせてプリセットを選べます。',
    bgLabel: '背景タイプ',
    keepLabel: '商品部分を保持する',
    errorMissing: '商品画像をアップロードしてください',
    button: '背景を変更',
    loading: '処理中...',
  },
  en: {
    title: 'Background Switch',
    subtitle: 'Background Switch',
    description: 'Swap the backdrop while keeping the product intact. Choose from preset scenes.',
    bgLabel: 'Background type',
    keepLabel: 'Keep product subject',
    errorMissing: 'Please upload a product image',
    button: 'Change Background',
    loading: 'Processing...',
  },
};

const BackgroundChange = ({ onResult, baseUrl, setGlobalLoading, locale = 'ja' }) => {
  const text = copy[locale] || copy.ja;
  const [imageBase64, setImageBase64] = useState(null);
  const [background, setBackground] = useState(backgroundOptions[0]);
  const [keepProduct, setKeepProduct] = useState(true);
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
    if (!imageBase64) {
      setError(text.errorMissing);
      return;
    }

    setLoading(true);
    setGlobalLoading?.(true);
    setError(null);
    const start = performance.now();

    try {
      const payload = { imageBase64, background, keepProduct };
      const response = await callWebhook(
        WEBHOOKS.ENDPOINTS.backgroundChange,
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
    <section aria-label="背景変更フォーム" className="space-y-24">
      <div>
        <div className="flex items-center gap-16 mb-16">
          <div className="flex items-center justify-center w-56 h-56 rounded-16 bg-gradient-to-br from-muted-teal to-sky-blue text-white text-2xl shadow-level-3">
            🌄
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
          id="background-change-image"
          label="商品画像"
          preview={imageBase64}
          onFileSelect={handleUpload}
          required
          locale={locale}
        />

        <div>
          <label htmlFor="backgroundType" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
            {text.bgLabel}
          </label>
          <select
            id="backgroundType"
            value={background}
            onChange={(event) => setBackground(event.target.value)}
            className="w-full rounded-12 border border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200"
          >
            {backgroundOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <label className="flex items-center gap-10 text-sm text-charcoal">
          <input
            type="checkbox"
            checked={keepProduct}
            onChange={(event) => setKeepProduct(event.target.checked)}
            className="h-16 w-16 rounded border-light-gray text-muted-teal focus:ring-muted-teal"
          />
          {text.keepLabel}
        </label>

        <ErrorMessage error={error} onDismiss={() => setError(null)} />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText={text.loading}
          icon="🌄"
          className="w-full rounded-12 bg-muted-teal text-white px-24 py-14 text-sm font-semibold shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-medium-gray disabled:shadow-none transition-all duration-200"
        >
          {text.button}
        </LoadingButton>
      </form>
    </section>
  );
};

export default BackgroundChange;
