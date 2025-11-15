import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import LoadingButton from './LoadingButton';
import ErrorMessage from './ErrorMessage';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const copy = {
  ja: {
    title: 'カラーカスタマイズ',
    subtitle: 'Color Customize',
    description: '商品画像から変更したい箇所を指定し、希望のカラーコードを入力します。',
    helper: 'RGB / HEX カラーピッカー対応',
    colorLabel: 'カラー',
    partLabel: '変更箇所',
    partPlaceholder: '例: 袖、襟、ロゴ部分',
    errorMissing: '画像と変更箇所を入力してください',
    button: 'カラーを変更',
    loading: '処理中...',
  },
  en: {
    title: 'Color Customize',
    subtitle: 'Color Customize',
    description: 'Specify the target area and desired color to recolor your product image.',
    helper: 'RGB / HEX color picker compatible',
    colorLabel: 'Color',
    partLabel: 'Part to change',
    partPlaceholder: 'e.g., sleeves, collar, logo area',
    errorMissing: 'Please upload an image and specify the area to change',
    button: 'Apply Color Change',
    loading: 'Processing...',
  },
};

const ColorCustomize = ({ onResult, baseUrl, setGlobalLoading, locale = 'ja' }) => {
  const text = copy[locale] || copy.ja;
  const [imageBase64, setImageBase64] = useState(null);
  const [color, setColor] = useState('#2563eb');
  const [part, setPart] = useState('全体');
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
    if (!imageBase64 || !part.trim()) {
      setError(text.errorMissing);
      return;
    }

    setLoading(true);
    setGlobalLoading?.(true);
    setError(null);
    const start = performance.now();

    try {
      const payload = { imageBase64, color, part: part.trim() };
      const response = await callWebhook(WEBHOOKS.ENDPOINTS.colorCustomize, payload, baseUrl);
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
    <section aria-label="カラーカスタマイズフォーム" className="bg-white/90 backdrop-blur-glass border border-white/50 rounded-16 shadow-glass p-24 md:p-32 space-y-24">
      <div>
        <div className="flex items-center gap-16 mb-16">
          <div className="flex items-center justify-center w-56 h-56 rounded-16 bg-gradient-to-br from-muted-teal to-dusty-purple text-white text-2xl shadow-level-3">
            🎯
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
          id="color-image"
          label="商品画像"
          preview={imageBase64}
          onFileSelect={handleUpload}
          required
          helperText={text.helper}
          locale={locale}
        />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <label htmlFor="colorPicker" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
              {text.colorLabel}
            </label>
            <div className="flex items-center gap-12 rounded-12 border border-light-gray bg-soft-white px-16 py-10">
              <input
                id="colorPicker"
                type="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
                className="h-40 w-40 rounded-full border border-very-light-gray bg-transparent"
              />
              <input
                type="text"
                value={color}
                onChange={(event) => setColor(event.target.value)}
                className="w-full border-none bg-transparent text-sm text-charcoal focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="part" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
              {text.partLabel}
            </label>
            <input
              id="part"
              type="text"
              value={part}
              onChange={(event) => setPart(event.target.value)}
              className="w-full rounded-12 border border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal placeholder:text-medium-gray focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200"
              placeholder={text.partPlaceholder}
            />
          </div>
        </div>

        <ErrorMessage error={error} onDismiss={() => setError(null)} />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText={text.loading}
          icon="🎯"
          className="w-full rounded-12 bg-muted-teal text-white px-24 py-14 text-sm font-semibold shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-medium-gray disabled:shadow-none transition-all duration-200"
        >
          {text.button}
        </LoadingButton>
      </form>
    </section>
  );
};

export default ColorCustomize;
