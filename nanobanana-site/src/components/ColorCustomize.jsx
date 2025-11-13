import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const ColorCustomize = ({ onResult, baseUrl, setGlobalLoading }) => {
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
      setError('画像と変更箇所を入力してください');
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
      onResult({ result: response, error: null, duration, source: 'カラーカスタマイズ' });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: 'カラーカスタマイズ' });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="カラーカスタマイズフォーム" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-brand-text">カラーカスタマイズ</h2>
        <p className="text-sm text-gray-600">商品画像から変更したい箇所を指定し、希望のカラーコードを入力します。</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <ImageUploader
          id="color-image"
          label="商品画像"
          preview={imageBase64}
          onFileSelect={handleUpload}
          required
          helperText="RGB / HEX カラーピッカー対応"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="colorPicker" className="text-sm font-medium text-gray-700">
              カラー
            </label>
            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-gray-300 px-4 py-2">
              <input
                id="colorPicker"
                type="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
                className="h-10 w-10 rounded-full border border-gray-200 bg-transparent"
              />
              <input
                type="text"
                value={color}
                onChange={(event) => setColor(event.target.value)}
                className="w-full border-none bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="part" className="text-sm font-medium text-gray-700">
              変更箇所
            </label>
            <input
              id="part"
              type="text"
              value={part}
              onChange={(event) => setPart(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
              placeholder="例: 袖、襟、ロゴ部分"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-brand px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? '処理中...' : 'カラーを変更'}
        </button>
      </form>
    </section>
  );
};

export default ColorCustomize;
