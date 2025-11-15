import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import LoadingButton from './LoadingButton';
import ModelPicker from './ModelPicker';
import ErrorMessage from './ErrorMessage';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const modelTypes = [
  { value: 'casual', label: 'カジュアル', description: '自然体・日常的な雰囲気' },
  { value: 'professional', label: 'プロフェッショナル', description: 'ビジネス / オケージョン' },
  { value: 'street', label: 'ストリート', description: '都会的でトレンド感' },
  { value: 'sport', label: 'スポーツ', description: 'アクティブで動きのある表現' },
];

const poses = [
  { value: 'standing', label: 'スタンダード', description: '真正面の立ち姿' },
  { value: 'walking', label: 'ウォーキング', description: '動きのあるポーズ' },
  { value: 'studio', label: 'スタジオ', description: 'シンプルで静止したポーズ' },
  { value: 'dynamic', label: 'ダイナミック', description: '大きな動きを伴う表現' },
];

const backgrounds = [
  { value: 'studio', label: 'スタジオライト', description: '無機質で商品が映える' },
  { value: 'outdoor', label: 'アウトドア', description: '自然光を感じる景色' },
  { value: 'urban', label: 'アーバンロケ', description: '街角や都会的な背景' },
  { value: 'custom', label: 'カスタム', description: '後で差し替えるための仮背景' },
];

const copy = {
  ja: {
    title: 'AIモデル試着（クイック）',
    subtitle: 'AI-Powered Model Photography',
    description: '商品画像とモデルパラメータを指定し、スタイリングされた着用イメージを生成します。',
    helperModel: 'ざっくりとしたモデルの雰囲気を選択してください。',
    helperPose: '確認したい動きに近いものを選択するとプレビューが想像しやすくなります。',
    helperBackground: '後で背景差し替えを行う場合は「カスタム」を選択してください。',
    button: '着用画像を生成',
    errorUpload: '商品画像をアップロードしてください',
    source: 'AIモデル試着（クイック）',
  },
  en: {
    title: 'AI Model Quick Try-on',
    subtitle: 'AI-Powered Model Photography',
    description: 'Pick broad model settings and generate quick styled previews.',
    helperModel: 'Choose a general vibe for the model.',
    helperPose: 'Pick a pose close to the motion you need to preview.',
    helperBackground: 'Select “Custom” if you plan to replace the background later.',
    button: 'Generate try-on',
    errorUpload: 'Please upload a product image',
    source: 'AI Model Quick Try-on',
  },
};

const AIModelWearing = ({ onResult, baseUrl, setGlobalLoading, locale = 'ja' }) => {
  const text = copy[locale] || copy.ja;
  const [productImage, setProductImage] = useState(null);
  const [modelType, setModelType] = useState(modelTypes[0].value);
  const [pose, setPose] = useState(poses[0].value);
  const [background, setBackground] = useState(backgrounds[0].value);
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
    <section aria-label="AIモデル着用画像生成フォーム" className="bg-white/90 backdrop-blur-glass border border-white/50 rounded-16 shadow-glass p-24 md:p-32 space-y-24">
      <div>
        <div className="flex items-center gap-16 mb-16">
          <div className="flex items-center justify-center w-56 h-56 rounded-16 bg-gradient-to-br from-muted-teal to-dusty-purple text-white text-2xl shadow-level-3">
            🧍
          </div>
          <div>
            <h2 className="text-2xl font-bold text-charcoal">{text.title}</h2>
            <p className="text-xs text-medium-gray mt-4">{text.subtitle}</p>
          </div>
        </div>
        <p className="text-base leading-[26px] text-medium-gray">{text.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-20">
        <ImageUploader
          id="ai-model-product"
          label="商品画像"
          preview={productImage}
          onFileSelect={handleImageUpload}
          required
          helperText="10MB以下のJPG / PNG / WEBP"
          locale={locale}
        />

        <ModelPicker
          label="モデルタイプ"
          helperText={text.helperModel}
          options={modelTypes}
          value={modelType}
          onChange={setModelType}
          size="sm"
        />

        <ModelPicker
          label="ポーズ"
          helperText={text.helperPose}
          options={poses}
          value={pose}
          onChange={setPose}
          size="sm"
        />

        <ModelPicker
          label="背景タイプ"
          helperText={text.helperBackground}
          options={backgrounds}
          value={background}
          onChange={setBackground}
          size="sm"
        />

        <ErrorMessage error={error} onDismiss={() => setError(null)} />

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

export default AIModelWearing;
