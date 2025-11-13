import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const backgroundOptions = ['studio', 'outdoor', 'street', 'nature', 'custom'];

const BackgroundChange = ({ onResult, baseUrl, setGlobalLoading }) => {
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
      setError('商品画像をアップロードしてください');
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
      onResult({ result: response, error: null, duration, source: '背景変更' });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: '背景変更' });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="背景変更フォーム" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-brand-text">背景変更</h2>
        <p className="text-sm text-gray-600">商品被写体を維持したまま、背景のみを差し替えます。用途に合わせてプリセットを選べます。</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <ImageUploader
          id="background-change-image"
          label="商品画像"
          preview={imageBase64}
          onFileSelect={handleUpload}
          required
        />

        <div>
          <label htmlFor="backgroundType" className="text-sm font-medium text-gray-700">
            背景タイプ
          </label>
          <select
            id="backgroundType"
            value={background}
            onChange={(event) => setBackground(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
          >
            {backgroundOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={keepProduct}
            onChange={(event) => setKeepProduct(event.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
          />
          商品部分を保持する
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-brand px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? '処理中...' : '背景を変更'}
        </button>
      </form>
    </section>
  );
};

export default BackgroundChange;
