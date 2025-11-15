import React, { useState, useRef } from 'react';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';
import AutoResizeTextarea from './AutoResizeTextarea';
import LoadingButton from './LoadingButton';
import ErrorMessage from './ErrorMessage';

const copy = {
  ja: {
    title: 'デザインアイデア創出',
    subtitle: 'AI-Powered Design Ideation',
    description: '思い描くスタイルや参考素材を自然言語で入力すると、AIがデザインの方向性を提案します。',
    promptLabel: 'デザインプロンプト',
    promptPlaceholder: '例: エコレザーを使ったミニマルなジャケット、都会的でジェンダーレスな雰囲気',
    charCount: (length) => `${length} / 1000文字`,
    buttonText: 'デザインアイデアを生成',
    loadingText: 'AI生成中...',
    errorPrompt: 'デザインプロンプトを入力してください',
  },
  en: {
    title: 'Design Ideation',
    subtitle: 'AI-Powered Design Ideation',
    description: 'Describe your intended styles or references and AI proposes design directions.',
    promptLabel: 'Design Prompt',
    promptPlaceholder: 'e.g., Minimal eco-leather jacket with an urban genderless vibe',
    charCount: (length) => `${length} / 1000 characters`,
    buttonText: 'Generate Design Ideas',
    loadingText: 'Generating...',
    errorPrompt: 'Please enter a design prompt',
  },
};

const DesignIdeaGenerator = ({ onResult, baseUrl, setGlobalLoading, locale = 'ja' }) => {
  const text = copy[locale] || copy.ja;
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event?.preventDefault();
    if (!prompt.trim()) {
      setError(text.errorPrompt);
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
        onResult({ result: response, error: null, duration, source: text.title });
      } catch (err) {
        const message = err.message || 'エラーが発生しました';
        setError(message);
        onResult({ result: null, error: message, duration: null, source: text.title });
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
        <div className="flex items-center gap-16 mb-16">
          <div className="flex items-center justify-center w-56 h-56 rounded-16 bg-gradient-to-br from-muted-teal to-dusty-purple text-white text-2xl shadow-level-3">
            ✨
          </div>
          <div>
            <h2 className="text-2xl font-bold text-charcoal">{text.title}</h2>
            <p className="text-xs text-medium-gray mt-4">{text.subtitle}</p>
          </div>
        </div>
        <p className="text-base leading-[26px] text-medium-gray">
          {text.description}
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-20">
        <div>
          <label htmlFor="designPrompt" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
            {text.promptLabel} <span className="text-warm-coral">*</span>
          </label>
          <AutoResizeTextarea
            id="designPrompt"
            minRows={4}
            maxRows={12}
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder={text.promptPlaceholder}
            className="w-full rounded-12 border-2 border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal placeholder:text-medium-gray leading-relaxed focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200 shadow-sm hover:border-medium-gray"
          />
          <p className="text-xs text-medium-gray mt-10">
            {text.charCount(prompt.length)}
          </p>
        </div>

        <ErrorMessage error={error} onRetry={handleRetry} onDismiss={() => setError(null)} />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText={text.loadingText}
          icon="✨"
          className="w-full rounded-12 bg-muted-teal text-white px-24 py-14 text-sm font-semibold shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-medium-gray disabled:shadow-none"
        >
          {text.buttonText}
        </LoadingButton>
      </form>
    </section>
  );
};

export default DesignIdeaGenerator;
