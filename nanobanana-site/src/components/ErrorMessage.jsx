import React from 'react';

const ErrorMessage = ({ error, onRetry, onDismiss }) => {
  if (!error) return null;

  return (
    <div
      className="rounded-12 border-2 border-warm-coral/30 bg-warm-coral/5 p-16 fade-in animate-shake"
      role="alert"
    >
      <div className="flex items-start gap-12">
        <span className="text-2xl flex-shrink-0" role="img" aria-label="エラー">⚠️</span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-warm-coral leading-[20px]">エラーが発生しました</p>
          <p className="text-sm leading-[22px] text-charcoal mt-8">{error}</p>
          <div className="flex flex-wrap gap-8 mt-12">
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center gap-6 rounded-8 bg-warm-coral text-white px-16 py-8 text-sm font-medium hover:bg-warm-coral/90 active:scale-95 transition-all duration-150 shadow-level-1"
              >
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>リトライ</span>
              </button>
            )}
            {onDismiss && (
              <button
                type="button"
                onClick={onDismiss}
                className="inline-flex items-center gap-6 rounded-8 bg-very-light-gray text-charcoal px-16 py-8 text-sm font-medium hover:bg-light-gray active:scale-95 transition-all duration-150"
              >
                閉じる
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
