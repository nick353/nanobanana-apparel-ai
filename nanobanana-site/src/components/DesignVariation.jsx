import React, { useState } from 'react';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';
import ErrorMessage from './ErrorMessage';
import LoadingButton from './LoadingButton';

const copy = {
  ja: {
    title: 'デザインバリエーション',
    subtitle: 'Design Variations',
    description: '既存デザインの要素を指定して、欲しいバリエーション案をまとめて取得します。',
    originalLabel: '元デザインの説明',
    variationsLabel: '変更要素 / 希望',
    countLabel: 'バリエーション数',
    errorMissing: '元デザインと変更要素を入力してください',
    button: 'バリエーションを生成',
    loading: '生成中...',
  },
  en: {
    title: 'Design Variations',
    subtitle: 'Design Variations',
    description: 'Describe the base design and the elements you want to change to generate new variations.',
    originalLabel: 'Base design description',
    variationsLabel: 'Changes / requests',
    countLabel: 'Number of variations',
    errorMissing: 'Please fill both the base design and requested changes',
    button: 'Generate Variations',
    loading: 'Generating...',
  },
};

const DesignVariation = ({ onResult, baseUrl, setGlobalLoading, locale = 'ja' }) => {
  const text = copy[locale] || copy.ja;
  const [originalDesign, setOriginalDesign] = useState('');
  const [variations, setVariations] = useState('');
  const [count, setCount] = useState(3);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!originalDesign.trim() || !variations.trim()) {
      setError(text.errorMissing);
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

  return (
    <section aria-label="デザインバリエーションフォーム" className="bg-white/90 backdrop-blur-glass border border-white/50 rounded-16 shadow-glass p-24 md:p-32 space-y-24">
      <div>
        <div className="flex items-center gap-16 mb-16">
          <div className="flex items-center justify-center w-56 h-56 rounded-16 bg-gradient-to-br from-muted-teal to-dusty-purple text-white text-2xl shadow-level-3">
            🎨
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

      <form onSubmit={handleSubmit} className="space-y-20">
        <div>
          <label htmlFor="originalDesign" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
            {text.originalLabel}
          </label>
          <textarea
            id="originalDesign"
            rows={3}
            value={originalDesign}
            onChange={(event) => setOriginalDesign(event.target.value)}
            className="w-full rounded-12 border border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal placeholder:text-medium-gray focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="variations" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
            {text.variationsLabel}
          </label>
          <textarea
            id="variations"
            rows={3}
            value={variations}
            onChange={(event) => setVariations(event.target.value)}
            className="w-full rounded-12 border border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal placeholder:text-medium-gray focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="variationCount" className="text-sm leading-[20px] font-semibold text-charcoal block mb-10">
            {text.countLabel}
          </label>
          <input
            id="variationCount"
            type="number"
            min={1}
            max={10}
            value={count}
            onChange={(event) => setCount(event.target.value)}
            className="w-full rounded-12 border border-light-gray bg-soft-white px-16 py-14 text-sm text-charcoal placeholder:text-medium-gray focus:border-muted-teal focus:outline-none focus:ring-4 focus:ring-muted-teal/10 transition-all duration-200"
          />
        </div>

        <ErrorMessage error={error} onDismiss={() => setError(null)} />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText={text.loading}
          icon="🎨"
          className="w-full rounded-12 bg-muted-teal text-white px-24 py-14 text-sm font-semibold shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-medium-gray disabled:shadow-none transition-all duration-200"
        >
          {text.button}
        </LoadingButton>
      </form>
    </section>
  );
};

export default DesignVariation;
