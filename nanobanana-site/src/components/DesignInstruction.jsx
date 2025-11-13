import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import { imageToBase64, validateImageFile } from '../utils/imageUtils';
import { callWebhook } from '../utils/apiClient';
import { WEBHOOKS } from '../config/webhooks';

const instructionTypes = [
  { id: 'prompt', label: '新規生成指示' },
  { id: 'revision', label: '修正指示' },
  { id: 'style-guide', label: 'スタイルガイド' },
];

const DesignInstruction = ({ onResult, baseUrl, setGlobalLoading }) => {
  const [instruction, setInstruction] = useState('');
  const [imageBase64, setImageBase64] = useState(null);
  const [type, setType] = useState(instructionTypes[0].id);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file) => {
    try {
      validateImageFile(file);
      const base64 = await imageToBase64(file);
      setImageBase64(base64);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!instruction.trim()) {
      setError('デザイン指示を入力してください');
      return;
    }

    setLoading(true);
    setGlobalLoading?.(true);
    setError(null);
    const start = performance.now();

    try {
      const payload = {
        instruction: instruction.trim(),
        imageBase64: imageBase64 || null,
        type,
      };
      const response = await callWebhook(
        WEBHOOKS.ENDPOINTS.designInstruction,
        payload,
        baseUrl,
      );
      const duration = (performance.now() - start) / 1000;
      onResult({ result: response, error: null, duration, source: 'デザイン指示統合' });
    } catch (err) {
      const message = err.message || 'エラーが発生しました';
      setError(message);
      onResult({ result: null, error: message, duration: null, source: 'デザイン指示統合' });
    } finally {
      setLoading(false);
      setGlobalLoading?.(false);
    }
  };

  return (
    <section aria-label="デザイン指示フォーム" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-brand-text">デザイン指示統合</h2>
        <p className="text-sm text-gray-600">自由テキスト指示と画像参考をまとめて送信し、n8nワークフローに渡します。</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="instruction" className="text-sm font-medium text-gray-700">
            指示内容
          </label>
          <textarea
            id="instruction"
            rows={4}
            value={instruction}
            onChange={(event) => setInstruction(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
            placeholder="例: モデルをさらにスポーティに、背景は屋外のランウェイ風"
          />
        </div>

        <div>
          <label htmlFor="instructionType" className="text-sm font-medium text-gray-700">
            指示タイプ
          </label>
          <select
            id="instructionType"
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
          >
            {instructionTypes.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <ImageUploader
          id="instruction-image"
          label="参考画像 (任意)"
          preview={imageBase64}
          onFileSelect={handleUpload}
          helperText="任意で添付できます"
        />

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-brand px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? '送信中...' : '指示を送信'}
        </button>
      </form>
    </section>
  );
};

export default DesignInstruction;
