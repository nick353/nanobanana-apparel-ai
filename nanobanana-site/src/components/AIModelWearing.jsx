import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const modelTypes = ['casual', 'professional', 'street', 'sport'];
const poses = ['standing', 'walking', 'studio', 'dynamic'];
const backgrounds = ['studio', 'outdoor', 'urban', 'custom'];

const AIModelWearing = ({ onResult, baseUrl, setGlobalLoading }) => {
  const [productImage, setProductImage] = useState(null);
  const [modelType, setModelType] = useState(modelTypes[0]);
  const [pose, setPose] = useState(poses[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file) => {
    try {
      validateImageFile(file);
      const base64 = await imageToBase64(file);
      setProductImage(base64);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!productImage) {
      setError('商品画像をアップロードしてください');
      return;
    }

    setLoading(true);
    setGlobalLoading?.(true);
    setError(null);
    const start = performance.now();

    try {
      const response = await callWebhook(
        WEBHOOKS.ENDPOINTS.aiModelWearing,
        {
          productImage,
          modelType,
          pose,
          background,
        },
        baseUrl,
      );
      const duration = (performance.now() - start) / 1000;
      onResult({ result: response, error: null, duration, source: 'AIモデル着用画像生成' });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: 'AIモデル着用画像生成' });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="AIモデル着用画像生成フォーム" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-brand-text">AIモデル着用画像生成</h2>
        <p className="text-sm text-gray-600">商品画像とモデルパラメータを指定し、スタイリングされた着用イメージを生成します。</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <ImageUploader
          id="ai-model-product"
          label="商品画像"
          preview={productImage}
          onFileSelect={handleImageUpload}
          required
          helperText="10MB以下のJPG / PNG / WEBP"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="modelType" className="text-sm font-medium text-gray-700">
              モデルタイプ
            </label>
            <select
              id="modelType"
              value={modelType}
              onChange={(event) => setModelType(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
            >
              {modelTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="pose" className="text-sm font-medium text-gray-700">
              ポーズ
            </label>
            <select
              id="pose"
              value={pose}
              onChange={(event) => setPose(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
            >
              {poses.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="background" className="text-sm font-medium text-gray-700">
            背景タイプ
          </label>
          <select
            id="background"
            value={background}
            onChange={(event) => setBackground(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
          >
            {backgrounds.map((bg) => (
              <option key={bg} value={bg}>
                {bg}
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
          {loading ? '生成中...' : '着用画像を生成'}
        </button>
      </form>
    </section>
  );
};

export default AIModelWearing;
