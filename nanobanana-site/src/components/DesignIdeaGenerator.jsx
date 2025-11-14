import React, { useState, useRef } from 'react';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';
import AutoResizeTextarea from './AutoResizeTextarea';
import LoadingButton from './LoadingButton';
import ErrorMessage from './ErrorMessage';

const DesignIdeaGenerator = ({ onResult, baseUrl, setGlobalLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event?.preventDefault();
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

  const handleRetry = () => {
    setError(null);
    handleSubmit();
  };

  return (
    <section aria-label="デザインアイデア生成フォーム" className="space-y-24">
      <div>
        <div className="flex items-center gap-12 mb-12">
          <div className="flex items-center justify-center w-40 h-40 rounded-12 bg-gradient-to-br from-muted-teal to-dusty-purple text-white text-xl shadow-level-2">
            ✨
          </div>
          <div>
            <h2 className="text-[20px] leading-[28px] font-semibold text-charcoal">デザインアイデア創出</h2>
            <p className="text-xs text-medium-gray mt-2">AI-Powered Design Ideation</p>
          </div>
        </div>
        <p className="text-sm leading-[22px] text-medium-gray">
          思い描くスタイルや参考素材を自然言語で入力すると、AIがデザインの方向性を提案します。
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-20">
        <div>
          <label htmlFor="designPrompt" className="text-[12px] leading-[16px] font-medium text-charcoal block mb-8">
            デザインプロンプト <span className="text-warm-coral">*</span>
          </label>
          <AutoResizeTextarea
            id="designPrompt"
            minRows={4}
            maxRows={12}
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="例: エコレザーを使ったミニマルなジャケット、都会的でジェンダーレスな雰囲気"
            className="w-full rounded-12 border border-light-gray bg-soft-white px-16 py-12 text-sm text-charcoal placeholder:text-medium-gray leading-relaxed focus:border-muted-teal focus:outline-none focus:ring-2 focus:ring-muted-teal/20 transition-all duration-150"
          />
          <p className="text-xs text-medium-gray mt-8">
            {prompt.length} / 1000文字
          </p>
        </div>

        <ErrorMessage error={error} onRetry={handleRetry} onDismiss={() => setError(null)} />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText="AI生成中..."
          icon="✨"
          className="w-full rounded-12 bg-muted-teal text-white px-24 py-14 text-sm font-semibold shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-medium-gray disabled:shadow-none"
        >
          デザインアイデアを生成
        </LoadingButton>
      </form>
    </section>
  );
};

export default DesignIdeaGenerator;
