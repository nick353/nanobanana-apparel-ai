import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const ImageRetouch = ({ onResult, baseUrl, setGlobalLoading }) => {
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
      setError('画像と編集指示を入力してください');
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
      onResult({ result: response, error: null, duration, source: '画像レタッチ・修正' });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: '画像レタッチ・修正' });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="画像レタッチフォーム" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-brand-text">画像レタッチ・修正</h2>
        <p className="text-sm text-gray-600">汚れ消しや質感調整などの指示を入力し、商品画像を最適化します。</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <ImageUploader
          id="retouch-image"
          label="対象画像"
          preview={imageBase64}
          onFileSelect={handleUpload}
          required
          helperText="10MB以下 / JPG, PNG, WEBP"
        />

        <div>
          <label htmlFor="retouchInstructions" className="text-sm font-medium text-gray-700">
            編集指示
          </label>
          <textarea
            id="retouchInstructions"
            rows={4}
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="例: シワを減らし、明るさを+10、背景の影を弱くする"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-brand px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? '処理中...' : 'レタッチを実行'}
        </button>
      </form>
    </section>
  );
};

export default ImageRetouch;
