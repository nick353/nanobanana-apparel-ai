import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import LoadingButton from './LoadingButton';
import ModelPicker from './ModelPicker';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const models = [
  { value: 'model-casual-female', label: 'カジュアル女性（20代）', description: 'アジア系・カジュアルスタイル' },
  { value: 'model-professional-male', label: 'ビジネス男性（30代）', description: '欧米系・フォーマル' },
  { value: 'model-elegant-female', label: 'エレガント女性（30代）', description: '欧米系・洗練' },
  { value: 'model-sporty-male', label: 'スポーツ男性（20代）', description: 'アジア系・アクティブ' },
  { value: 'model-trendy-female', label: 'トレンディ女性（20代）', description: 'ファッショナブル' },
  { value: 'model-mature-male', label: 'マチュア男性（40代）', description: '欧米系・落ち着き' },
];

const copy = {
  ja: {
    title: 'AIモデル撮影（詳細設定）',
    subtitle: 'Advanced AI Model Studio',
    description: 'ターゲットモデルと商品画像を組み合わせ、詳細な撮影指示に沿った着用ビジュアルを生成します。',
    helper: 'ターゲットとなるペルソナやマーケットに近いモデルを選んでください。',
    button: 'モデルで着用画像を生成',
    errorUpload: '商品画像をアップロードしてください',
    source: 'AIモデル撮影（詳細設定）',
  },
  en: {
    title: 'AI Model Studio (Advanced)',
    subtitle: 'Advanced AI Model Studio',
    description: 'Pair your product with a target model and generate shots with detailed direction.',
    helper: 'Pick a persona that matches your market or campaign target.',
    button: 'Generate with selected model',
    errorUpload: 'Please upload a product image',
    source: 'AI Model Studio',
  },
};

const AIModelSelection = ({ onResult, baseUrl, setGlobalLoading, locale = 'ja' }) => {
  const text = copy[locale] || copy.ja;
  const [productImage, setProductImage] = useState(null);
  const [selectedModel, setSelectedModel] = useState(models[0].value);
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
      setError(text.errorUpload);
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
      onResult({ result: response, error: null, duration, source: text.source });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: text.source });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="AIモデル選択フォーム" className="space-y-24">
      <div>
        <div className="flex items-center gap-16 mb-16">
          <div className="flex items-center justify-center w-56 h-56 rounded-16 bg-gradient-to-br from-muted-teal to-dusty-purple text-white text-2xl shadow-level-3">
            🤖
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
        <ImageUploader
          id="model-selection-product"
          label="商品画像"
          preview={productImage}
          onFileSelect={handleImageUpload}
          required
        />

        <ModelPicker
          label="モデルを選択"
          helperText={text.helper}
          options={models}
          value={selectedModel}
          onChange={setSelectedModel}
          enableSearch
        />

        {error && <p className="rounded-12 border-2 border-warm-coral/30 bg-warm-coral/5 p-16 text-sm text-warm-coral">{error}</p>}

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText="生成中..."
          className="w-full rounded-12 bg-muted-teal text-white px-24 py-14 text-sm font-semibold shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-light-gray disabled:text-medium-gray disabled:shadow-none transition-all duration-200"
        >
          {text.button}
        </LoadingButton>
      </form>
    </section>
  );
};

export default AIModelSelection;
