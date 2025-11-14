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
    <section aria-label="AIモデル着用画像生成フォーム" className="space-y-24">
      <div>
        <div className="flex items-center gap-16 mb-16">
          <div className="flex items-center justify-center w-56 h-56 rounded-16 bg-gradient-to-br from-muted-teal to-dusty-purple text-white text-2xl shadow-level-3">
            🧍
          </div>
          <div>
            <h2 className="text-2xl font-bold text-charcoal">AIモデル着用画像生成</h2>
            <p className="text-xs text-medium-gray mt-4">AI-Powered Model Photography</p>
          </div>
        </div>
        <p className="text-base leading-[26px] text-medium-gray">商品画像とモデルパラメータを指定し、スタイリングされた着用イメージを生成します。</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-20">
        <ImageUploader
          id="ai-model-product"
          label="商品画像"
          preview={productImage}
          onFileSelect={handleImageUpload}
          required
          helperText="10MB以下のJPG / PNG / WEBP"
        />

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <label htmlFor="modelType" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
              モデルタイプ
            </label>
            <select
              id="modelType"
              value={modelType}
              onChange={(event) => setModelType(event.target.value)}
              className="w-full rounded-12 border-2 border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200 shadow-sm hover:border-medium-gray"
            >
              {modelTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="pose" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
              ポーズ
            </label>
            <select
              id="pose"
              value={pose}
              onChange={(event) => setPose(event.target.value)}
              className="w-full rounded-12 border-2 border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200 shadow-sm hover:border-medium-gray"
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
          <label htmlFor="background" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
            背景タイプ
          </label>
          <select
            id="background"
            value={background}
            onChange={(event) => setBackground(event.target.value)}
            className="w-full rounded-12 border-2 border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200 shadow-sm hover:border-medium-gray"
          >
            {backgrounds.map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="rounded-12 border-2 border-warm-coral/30 bg-warm-coral/5 p-16 text-sm text-warm-coral animate-shake">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-12 bg-muted-teal text-white px-24 py-14 text-sm font-semibold shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-medium-gray disabled:shadow-none transition-all duration-200"
        >
          {loading ? '生成中...' : '着用画像を生成'}
        </button>
      </form>
    </section>
  );
};

export default AIModelWearing;
