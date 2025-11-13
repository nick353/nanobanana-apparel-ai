import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const backgroundPresets = [
  { id: 'studio-white', label: 'Studio White' },
  { id: 'outdoor-park', label: 'Outdoor Park' },
  { id: 'urban-street', label: 'Urban Street' },
  { id: 'beach-resort', label: 'Beach Resort' },
  { id: 'indoor-room', label: 'Indoor Room' },
  { id: 'gradient-modern', label: 'Gradient Modern' },
  { id: 'custom', label: 'Custom' },
];

const BackgroundSelection = ({ onResult, baseUrl, setGlobalLoading }) => {
  const [productImage, setProductImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [backgroundId, setBackgroundId] = useState(backgroundPresets[0].id);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file, setter) => {
    try {
      validateImageFile(file);
      const base64 = await imageToBase64(file);
      setter(base64);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!productImage || !backgroundImage) {
      setError('商品画像と背景画像の両方をアップロードしてください');
      return;
    }

    setLoading(true);
    setGlobalLoading?.(true);
    setError(null);
    const start = performance.now();

    try {
      const payload = { productImage, backgroundImage, backgroundId };
      const response = await callWebhook(
        WEBHOOKS.ENDPOINTS.backgroundSelection,
        payload,
        baseUrl,
      );
      const duration = (performance.now() - start) / 1000;
      onResult({ result: response, error: null, duration, source: '背景画像選択' });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: '背景画像選択' });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="背景画像選択フォーム" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-brand-text">背景画像選択</h2>
        <p className="text-sm text-gray-600">商品画像と背景素材を組み合わせ、プリセットIDを指定して合成リクエストを送信します。</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <ImageUploader
          id="background-selection-product"
          label="商品画像"
          preview={productImage}
          onFileSelect={(file) => handleUpload(file, setProductImage)}
          required
        />

        <ImageUploader
          id="background-selection-bg"
          label="背景画像"
          preview={backgroundImage}
          onFileSelect={(file) => handleUpload(file, setBackgroundImage)}
          required
        />

        <div>
          <label htmlFor="backgroundPreset" className="text-sm font-medium text-gray-700">
            背景プリセット
          </label>
          <select
            id="backgroundPreset"
            value={backgroundId}
            onChange={(event) => setBackgroundId(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
          >
            {backgroundPresets.map((preset) => (
              <option key={preset.id} value={preset.id}>
                {preset.label}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-brand px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? '処理中...' : '背景を適用'}
        </button>
      </form>
    </section>
  );
};

export default BackgroundSelection;
