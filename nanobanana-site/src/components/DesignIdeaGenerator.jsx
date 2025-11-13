import React, { useState } from 'react';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const DesignIdeaGenerator = ({ onResult, baseUrl, setGlobalLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!prompt.trim()) {
      setError('デザインプロンプトを入力してください');
      return;
    }

    setLoading(true);
    setError(null);
    setGlobalLoading?.(true);
    const start = performance.now();

    try {
      const response = await callWebhook(
        WEBHOOKS.ENDPOINTS.designIdea,
        { prompt: prompt.trim() },
        baseUrl,
      );
      const duration = (performance.now() - start) / 1000;
      onResult({ result: response, error: null, duration, source: 'デザインアイデア創出' });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: 'デザインアイデア創出' });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="デザインアイデア生成フォーム">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold text-brand-text">デザインアイデア創出</h2>
        <p className="text-sm text-gray-600">思い描くスタイルや参考素材を自然言語で入力すると、AIがデザインの方向性を提案します。</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="designPrompt" className="text-sm font-medium text-gray-700">
            プロンプト
          </label>
          <textarea
            id="designPrompt"
            rows={5}
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="例: エコレザーを使ったミニマルなジャケット、都会的でジェンダーレスな雰囲気"
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-brand px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? '生成中...' : 'デザインアイデアを生成'}
        </button>
      </form>
    </section>
  );
};

export default DesignIdeaGenerator;
