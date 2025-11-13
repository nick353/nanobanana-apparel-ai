import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const models = [
  { id: 'model-casual-female', name: 'カジュアル女性（20代）', description: 'アジア系・カジュアルスタイル' },
  { id: 'model-professional-male', name: 'ビジネス男性（30代）', description: '欧米系・フォーマル' },
  { id: 'model-elegant-female', name: 'エレガント女性（30代）', description: '欧米系・洗練' },
  { id: 'model-sporty-male', name: 'スポーツ男性（20代）', description: 'アジア系・アクティブ' },
  { id: 'model-trendy-female', name: 'トレンディ女性（20代）', description: 'ファッショナブル' },
  { id: 'model-mature-male', name: 'マチュア男性（40代）', description: '欧米系・落ち着き' },
];

const AIModelSelection = ({ onResult, baseUrl, setGlobalLoading }) => {
  const [productImage, setProductImage] = useState(null);
  const [selectedModel, setSelectedModel] = useState(models[0].id);
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
      const payload = { productImage, modelId: selectedModel };
      const response = await callWebhook(
        WEBHOOKS.ENDPOINTS.aiModelSelection,
        payload,
        baseUrl,
      );
      const duration = (performance.now() - start) / 1000;
      onResult({ result: response, error: null, duration, source: 'AIモデル選択' });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: 'AIモデル選択' });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="AIモデル選択フォーム" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-brand-text">AIモデル選択</h2>
        <p className="text-sm text-gray-600">ターゲットモデルを選び、商品画像をアップロードして着用パターンを生成します。</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <ImageUploader
          id="model-selection-product"
          label="商品画像"
          preview={productImage}
          onFileSelect={handleImageUpload}
          required
        />

        <div className="grid gap-4 md:grid-cols-2">
          {models.map((model) => {
            const isActive = model.id === selectedModel;
            return (
              <button
                type="button"
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand ${
                  isActive ? 'border-brand bg-blue-50' : 'border-gray-200 hover:border-brand/60'
                }`}
                aria-pressed={isActive}
              >
                <p className="font-semibold text-brand-text">{model.name}</p>
                <p className="text-xs text-gray-600">{model.description}</p>
              </button>
            );
          })}
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-brand px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? '生成中...' : 'モデルで着用画像を生成'}
        </button>
      </form>
    </section>
  );
};

export default AIModelSelection;
