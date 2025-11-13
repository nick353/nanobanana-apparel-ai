import React, { useState } from 'react';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const DesignVariation = ({ onResult, baseUrl, setGlobalLoading }) => {
  const [originalDesign, setOriginalDesign] = useState('');
  const [variations, setVariations] = useState('');
  const [count, setCount] = useState(3);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!originalDesign.trim() || !variations.trim()) {
      setError('元デザインと変更要素を入力してください');
      return;
    }

    setError(null);
    setLoading(true);
    setGlobalLoading?.(true);
    const start = performance.now();

    try {
      const payload = {
        originalDesign: originalDesign.trim(),
        variations: variations.trim(),
        count: Number(count) || 1,
      };
      const response = await callWebhook(
        WEBHOOKS.ENDPOINTS.designVariation,
        payload,
        baseUrl,
      );
      const duration = (performance.now() - start) / 1000;
      onResult({ result: response, error: null, duration, source: 'デザインバリエーション' });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: 'デザインバリエーション' });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="デザインバリエーションフォーム">
      <h2 className="text-2xl font-semibold text-brand-text">デザインバリエーション展開</h2>
      <p className="text-sm text-gray-600">
        既存デザインの要素を指定して、欲しいバリエーション案をまとめて取得します。
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="originalDesign" className="text-sm font-medium text-gray-700">
            元デザインの説明
          </label>
          <textarea
            id="originalDesign"
            rows={3}
            value={originalDesign}
            onChange={(event) => setOriginalDesign(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        <div>
          <label htmlFor="variations" className="text-sm font-medium text-gray-700">
            変更要素 / 希望
          </label>
          <textarea
            id="variations"
            rows={3}
            value={variations}
            onChange={(event) => setVariations(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        <div>
          <label htmlFor="variationCount" className="text-sm font-medium text-gray-700">
            バリエーション数
          </label>
          <input
            id="variationCount"
            type="number"
            min={1}
            max={10}
            value={count}
            onChange={(event) => setCount(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-brand px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? '生成中...' : 'バリエーションを生成'}
        </button>
      </form>
    </section>
  );
};

export default DesignVariation;
