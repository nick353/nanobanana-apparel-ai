import React, { useEffect, useState } from 'react';

const SettingsModal = ({ isOpen, onClose, onSave, baseUrl }) => {
  const [tempUrl, setTempUrl] = useState(baseUrl ?? '');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setTempUrl(baseUrl ?? '');
      setError(null);
    }
  }, [isOpen, baseUrl]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!tempUrl.trim()) {
      setError('URLを入力してください');
      return;
    }
    try {
      const parsed = new URL(tempUrl.trim());
      onSave(parsed.toString().replace(/\/$/, ''));
      onClose();
    } catch (err) {
      setError('有効なURLを入力してください');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm px-16 fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-lg p-32 shadow-level-4 scale-100 hover:scale-[1.01] transition-transform duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-24">
          <div>
            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center justify-center w-32 h-32 rounded-8 bg-muted-teal/10 text-muted-teal text-lg">
                ⚙️
              </div>
              <h3 className="text-[20px] leading-[28px] font-semibold text-charcoal">n8n Webhook設定</h3>
            </div>
            <p className="text-sm leading-[22px] text-medium-gray">
              ベースURLを設定すると全ワークフローで共有されます。
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-40 h-40 rounded-8 bg-very-light-gray text-medium-gray hover:bg-warm-coral/10 hover:text-warm-coral active:scale-95 transition-all duration-150 ml-16"
            aria-label="設定モーダルを閉じる"
          >
            <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-24">
          <div>
            <label htmlFor="baseUrl" className="text-[12px] leading-[16px] font-medium text-charcoal block mb-8">
              n8n Base URL
            </label>
            <input
              id="baseUrl"
              type="url"
              value={tempUrl}
              onChange={(event) => setTempUrl(event.target.value)}
              placeholder="https://example.n8n.cloud"
              className="w-full h-44 rounded-8 border border-light-gray bg-soft-white px-16 text-sm text-charcoal placeholder:text-medium-gray focus:border-muted-teal focus:outline-none focus:ring-2 focus:ring-muted-teal/20 transition-all duration-150"
            />
            {error && (
              <div className="flex items-start gap-8 mt-8 text-warm-coral">
                <span role="img" aria-label="エラー">⚠️</span>
                <p className="text-sm leading-[18px]">{error}</p>
              </div>
            )}
          </div>
          <div className="flex justify-end gap-12">
            <button
              type="button"
              onClick={onClose}
              className="rounded-8 border border-light-gray bg-transparent px-20 py-12 text-sm font-medium text-charcoal hover:bg-very-light-gray hover:border-medium-gray active:scale-98 transition-all duration-150"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="rounded-8 bg-muted-teal px-20 py-12 text-sm font-medium text-white shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 active:bg-muted-teal-active active:scale-98 transition-all duration-150"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsModal;
