import React, { useEffect, useState } from 'react';

const ResultDisplay = ({
  result,
  error,
  duration,
  isLoading,
  source,
  history = [],
  onClearHistory,
  variant = 'full',
  assets = [],
}) => {
  const [copied, setCopied] = useState(false);
  const isInline = variant === 'inline';
  const [activeTab, setActiveTab] = useState('latest');

  useEffect(() => {
    setActiveTab('latest');
  }, [result, error, isLoading]);

  const formatTimestamp = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return isoString;
    return date.toLocaleString('ja-JP', { hour12: false });
  };

  const statusMeta = (() => {
    if (isLoading) {
      return { label: '処理中', icon: '⏳', className: 'bg-soft-gold/20 text-soft-gold' };
    }
    if (error) {
      return { label: 'エラー', icon: '⚠️', className: 'bg-warm-coral/15 text-warm-coral' };
    }
    if (result) {
      return { label: '完了', icon: '✓', className: 'bg-muted-teal/15 text-muted-teal' };
    }
    return { label: '待機中', icon: '💤', className: 'bg-very-light-gray text-medium-gray' };
  })();

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-16 fade-in">
          <div className="flex items-center gap-12">
            <div className="pulse-animate">
              <svg className="w-24 h-24 text-muted-teal" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <p className="text-sm leading-[22px] text-medium-gray">
              AI処理中です。しばらくお待ちください...
            </p>
          </div>

          {/* Skeleton loading preview */}
          <div className="space-y-12">
            <div className="flex gap-12">
              <div className="skeleton h-32 w-80 rounded-8"></div>
              <div className="skeleton h-32 w-120 rounded-8"></div>
              <div className="skeleton h-32 w-100 rounded-8"></div>
            </div>
            <div className="skeleton h-200 w-full rounded-12"></div>
            <div className="space-y-8">
              <div className="skeleton h-16 w-full rounded-8"></div>
              <div className="skeleton h-16 w-4/5 rounded-8"></div>
              <div className="skeleton h-16 w-3/4 rounded-8"></div>
            </div>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="rounded-12 border-2 border-warm-coral/30 bg-warm-coral/5 p-16 fade-in" role="alert">
          <div className="flex items-start gap-12">
            <span className="text-2xl" role="img" aria-label="エラー">⚠️</span>
            <div>
              <p className="font-semibold text-warm-coral leading-[20px]">エラーが発生しました</p>
              <p className="text-sm leading-[22px] text-charcoal mt-8">{error}</p>
            </div>
          </div>
        </div>
      );
    }

    if (result) {
      return (
        <div className="space-y-16 fade-in">
          <div className="flex flex-wrap items-center gap-12 text-sm">
            <span className="inline-flex items-center gap-4 rounded-8 bg-soft-gold/20 px-12 py-6 text-soft-gold font-medium checkmark-animate">
              <span role="img" aria-label="成功">✓</span>
              成功
            </span>
            {source && (
              <span className="inline-flex items-center gap-4 font-medium text-muted-teal">
                <span role="img" aria-hidden="true">📝</span>
                {source}
              </span>
            )}
            {typeof duration === 'number' && (
              <span className="inline-flex items-center gap-4 rounded-8 bg-very-light-gray px-12 py-6 text-medium-gray">
                <span role="img" aria-hidden="true">⏱️</span>
                {duration.toFixed(2)}秒
              </span>
            )}
          </div>

          <div className="rounded-12 border border-light-gray bg-soft-white overflow-hidden shadow-level-1">
            <div className="flex items-center justify-between border-b border-very-light-gray px-16 py-12 bg-very-light-gray/30">
              <p className="text-sm font-semibold text-charcoal leading-[20px]">API応答</p>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(JSON.stringify(result, null, 2));
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  } catch (copyError) {
                    console.error(copyError);
                    setCopied(false);
                  }
                }}
                className="inline-flex items-center gap-4 rounded-8 px-12 py-6 text-xs font-medium text-muted-teal hover:bg-muted-teal/10 active:scale-98 transition-all duration-150"
              >
                <span role="img" aria-hidden="true">{copied ? '✓' : '📋'}</span>
                {copied ? 'コピー済み' : 'コピー'}
              </button>
            </div>
            <pre className="max-h-80 overflow-auto px-16 py-16 text-[13px] leading-[20px] text-charcoal font-mono">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-start gap-12 text-medium-gray">
        <span className="text-2xl" role="img" aria-hidden="true">💭</span>
        <p className="text-sm leading-[22px]">
          結果がここに表示されます。<br />
          ワークフローを実行してください。
        </p>
      </div>
    );
  };

  const renderHistory = () => {
    if (!history.length && !assets.length) {
      return (
        <div className="flex items-start gap-12 text-medium-gray">
          <span className="text-xl" role="img" aria-hidden="true">🗂️</span>
          <p className="text-sm leading-[22px]">
            まだ履歴がありません。ワークフローを実行するとここに表示されます。
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-16">
        {assets.length > 0 && (
          <div className="rounded-12 border border-very-light-gray bg-soft-white/90 p-14 shadow-level-1">
            <div className="flex items-center justify-between mb-10">
              <p className="text-sm font-semibold text-charcoal">アセットギャラリー（近日強化予定）</p>
              <span className="text-xs text-medium-gray">{assets.length} items</span>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {assets.slice(0, 6).map((asset) => (
                <div key={asset.id} className="aspect-square rounded-10 bg-very-light-gray flex items-center justify-center text-medium-gray text-xs">
                  {asset.thumb ? (
                    <img src={asset.thumb} alt="" className="h-full w-full rounded-10 object-cover" />
                  ) : (
                    'Soon'
                  )}
                </div>
              ))}
              {assets.length === 0 && <div className="text-xs text-medium-gray">生成結果がここに並びます</div>}
            </div>
          </div>
        )}

        {history.length > 0 && (
          <div className="space-y-12">
            {history.map((entry) => {
              const success = entry.result && !entry.error;
              const previewSource = success
                ? JSON.stringify(entry.result, null, 2)
                : entry.error || 'エラー';
              const preview = previewSource.length > 180 ? `${previewSource.slice(0, 180)}…` : previewSource;
              return (
                <div
                  key={entry.id}
                  className="rounded-12 border border-very-light-gray bg-soft-white/90 p-16 shadow-level-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-12">
                    <div className="flex items-center gap-8 text-sm font-semibold">
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs ${
                          success ? 'bg-muted-teal/15 text-muted-teal' : 'bg-warm-coral/15 text-warm-coral'
                        }`}
                        aria-hidden="true"
                      >
                        {success ? '✓' : '!'}
                      </span>
                      {success ? '成功' : '失敗'}
                      {entry.source && (
                        <span className="text-xs font-medium text-medium-gray">/ {entry.source}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-10 text-xs text-medium-gray">
                      {typeof entry.duration === 'number' && (
                        <span className="inline-flex items-center gap-4">
                          ⏱️ {entry.duration.toFixed(2)}秒
                        </span>
                      )}
                      <span>{formatTimestamp(entry.timestamp)}</span>
                    </div>
                  </div>
                  <pre className="mt-12 text-xs leading-[20px] text-charcoal/90 font-mono whitespace-pre-wrap break-words">
                    {preview}
                  </pre>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className={`glass-panel ${isInline ? 'space-y-16 p-24' : 'space-y-24 p-32'}`}
      aria-live="polite"
    >
      <div className={`flex ${isInline ? 'items-center justify-between gap-16' : 'flex-col gap-8'}`}>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-medium-gray">Results</p>
          <h2 className="text-2xl font-bold text-charcoal">処理結果</h2>
          {!isInline && (
            <p className="text-sm leading-[22px] text-medium-gray mt-8">
              成功・エラーメッセージ、処理時間、API応答を表示します。
            </p>
          )}
        </div>
        <div className="flex items-center gap-12">
          <span
            className={`inline-flex items-center gap-6 rounded-12 px-16 py-6 text-xs font-semibold ${statusMeta.className}`}
          >
            <span aria-hidden="true">{statusMeta.icon}</span>
            {statusMeta.label}
          </span>
          {history.length > 0 && (
            <button
              type="button"
              onClick={() => onClearHistory?.()}
              className="text-xs font-medium text-medium-gray underline-offset-4 hover:text-charcoal"
            >
              履歴をクリア
            </button>
          )}
        </div>
      </div>
      <div className="flex gap-12 border-b border-very-light-gray pb-8 text-sm font-semibold">
        <button
          type="button"
          onClick={() => setActiveTab('latest')}
          className={`pb-8 transition-colors ${activeTab === 'latest' ? 'text-charcoal border-b-2 border-muted-teal' : 'text-medium-gray hover:text-charcoal'}`}
        >
          最新
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('history')}
          className={`pb-8 transition-colors ${activeTab === 'history' ? 'text-charcoal border-b-2 border-muted-teal' : 'text-medium-gray hover:text-charcoal'}`}
        >
          履歴 ({history.length})
        </button>
      </div>
      {activeTab === 'latest' ? renderContent() : renderHistory()}
    </section>
  );
};

export default ResultDisplay;
