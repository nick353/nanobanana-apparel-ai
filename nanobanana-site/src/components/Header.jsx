import React, { useState, useRef, useEffect, useCallback } from 'react';

const Header = ({ onOpenSettings, baseUrl, locale = 'ja', onLocaleChange, supportedLocales = [], compact = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const isConnected = Boolean(baseUrl);

  const handleJumpToWorkflows = useCallback(() => {
    if (typeof document === 'undefined') return;
    const target = document.getElementById('workflow-panel');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  if (compact) {
    return (
      <header
        className="sticky top-0 z-30 bg-warm-cream/90 backdrop-blur-md border-b border-very-light-gray"
        aria-label="NanoBanana サイトヘッダー"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-16 px-24 py-14 md:px-40">
          <div className="flex items-center gap-12">
            <div className="flex h-44 w-44 items-center justify-center rounded-12 bg-gradient-to-br from-muted-teal to-dusty-purple text-2xl text-white shadow-level-2">
              <span role="img" aria-hidden="true">🍌</span>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-dusty-purple font-semibold">NANOBANANA</p>
              <p className="text-xs text-medium-gray mt-1">AI Design Studio</p>
            </div>
          </div>

          <div className="flex items-center gap-12" ref={menuRef}>
            <div className="hidden md:block text-right text-xs text-medium-gray">
              <p className="uppercase tracking-[0.2em] font-medium">Status</p>
              <div className="mt-3 inline-flex items-center gap-6 rounded-10 px-12 py-6 text-xs font-semibold border border-very-light-gray">
                <span className={`h-8 w-8 rounded-full ${isConnected ? 'bg-muted-teal pulse-animate' : 'bg-light-gray'}`}></span>
                {isConnected ? 'Connected' : 'Offline'}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center gap-8 rounded-12 border border-very-light-gray bg-soft-white px-14 py-10 text-sm font-semibold text-charcoal hover:border-muted-teal hover:text-muted-teal transition-colors duration-150"
              aria-expanded={isMenuOpen}
            >
              ⚙️ 設定
              <svg className={`w-16 h-16 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {supportedLocales.length > 0 && (
              <div className="inline-flex rounded-12 border border-very-light-gray bg-soft-white p-3 text-xs font-semibold text-medium-gray">
                {supportedLocales.map((option) => {
                  const isActive = option.id === locale;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => onLocaleChange?.(option.id)}
                      className={`px-10 py-5 rounded-10 transition-all ${
                        isActive ? 'bg-muted-teal text-white shadow-level-1' : 'hover:text-charcoal'
                      }`}
                      aria-pressed={isActive}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            )}

            {isMenuOpen && (
              <div className="absolute right-10 top-full mt-8 w-72 rounded-16 border border-very-light-gray bg-soft-white shadow-level-4 overflow-hidden fade-in z-50">
                <button
                  type="button"
                  onClick={() => {
                    onOpenSettings();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-16 py-12 flex items-center gap-12 hover:bg-very-light-gray transition-colors duration-150"
                >
                  <span className="flex items-center justify-center w-32 h-32 rounded-8 bg-muted-teal/10 text-muted-teal" role="img" aria-hidden="true">
                    ⚙️
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-charcoal">設定を開く</p>
                    <p className="text-xs text-medium-gray mt-2">接続先URLを編集</p>
                  </div>
                </button>
                <div className="border-t border-very-light-gray px-16 py-12">
                  <p className="text-xs text-medium-gray mb-4">現在の設定</p>
                  <p className="text-xs font-mono text-charcoal truncate" title={baseUrl || '未設定'}>
                    {baseUrl || '未設定'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className="bg-white/80 backdrop-blur-glass border border-white/50 rounded-16 shadow-glass fade-in grid gap-24 p-24 md:p-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-32 lg:p-40 sticky top-0 z-20"
      aria-label="NanoBanana サイトヘッダー"
    >
      <div className="space-y-16">
        <div className="flex items-center gap-12">
          <div className="flex h-56 w-56 items-center justify-center rounded-16 bg-gradient-to-br from-muted-teal to-dusty-purple text-3xl text-white shadow-level-3">
            <span role="img" aria-hidden="true">🍌</span>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-dusty-purple font-semibold">NANOBANANA</p>
            <p className="text-xs text-medium-gray mt-2">AI Design Studio</p>
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.6em] text-muted-teal font-semibold">AI WORKFLOWS</p>
          <h1 className="text-4xl font-bold text-charcoal mt-12">
            AI-Powered Apparel Design
          </h1>
          <p className="text-base leading-[26px] text-medium-gray mt-8">
            9つのAIワークフローでアパレル制作をスピードアップ
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <button
            type="button"
            onClick={handleJumpToWorkflows}
            className="inline-flex items-center justify-center rounded-12 bg-muted-teal px-32 py-14 text-sm font-semibold text-white shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 hover:shadow-level-3 active:bg-muted-teal-active active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-teal transition-all duration-150"
          >
            ワークフローを見る
          </button>
        </div>
      </div>

      <div
        className="relative rounded-16 border border-very-light-gray bg-soft-white/90 p-20 shadow-level-1"
        ref={menuRef}
      >
        <div className="flex flex-col gap-12">
          <div className="flex items-start justify-between gap-12">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-medium-gray mb-4">Status</p>
              <p className="text-xl font-semibold text-charcoal">
                {isConnected ? '接続済み' : '未設定'}
              </p>
              <p className="text-xs text-medium-gray mt-6 max-w-xs truncate font-mono" title={baseUrl || '未設定'}>
                {isConnected ? baseUrl : 'Base URLを設定してください'}
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-6 rounded-12 px-12 py-6 text-xs font-semibold ${
                isConnected ? 'bg-muted-teal/10 text-muted-teal' : 'bg-very-light-gray text-medium-gray'
              }`}
              aria-live="polite"
            >
              <span className={`h-8 w-8 rounded-full ${isConnected ? 'bg-muted-teal pulse-animate' : 'bg-light-gray'}`}></span>
              {isConnected ? 'Connected' : 'Offline'}
            </span>
          </div>
          <p className="text-sm leading-[22px] text-medium-gray">
            AI連携の状態とWebhook設定の概要はこちらで確認できます。
          </p>
          <div className="flex flex-wrap items-center gap-12 border-t border-very-light-gray pt-16">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center gap-6 rounded-12 border border-very-light-gray px-16 py-10 text-sm font-medium text-charcoal hover:border-muted-teal hover:text-muted-teal transition-colors duration-150"
              aria-expanded={isMenuOpen}
            >
              ⚙️ 設定
              <svg className={`w-16 h-16 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {supportedLocales.length > 0 && (
            <div className="border-t border-very-light-gray pt-16">
              <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-medium-gray mb-8">Language</p>
              <div className="inline-flex rounded-12 border border-very-light-gray bg-soft-white p-4 text-xs font-semibold text-medium-gray">
                {supportedLocales.map((option) => {
                  const isActive = option.id === locale;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => onLocaleChange?.(option.id)}
                      className={`px-12 py-6 rounded-10 transition-all ${
                        isActive
                          ? 'bg-muted-teal text-white shadow-level-1'
                          : 'hover:text-charcoal'
                      }`}
                      aria-pressed={isActive}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-8 w-72 rounded-16 border border-very-light-gray bg-soft-white shadow-level-4 overflow-hidden fade-in z-50">
            <button
              type="button"
              onClick={() => {
                onOpenSettings();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-16 py-12 flex items-center gap-12 hover:bg-very-light-gray transition-colors duration-150"
            >
              <span className="flex items-center justify-center w-32 h-32 rounded-8 bg-muted-teal/10 text-muted-teal" role="img" aria-hidden="true">
                ⚙️
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-charcoal">設定を開く</p>
                <p className="text-xs text-medium-gray mt-2">接続先URLを編集</p>
              </div>
            </button>
            <div className="border-t border-very-light-gray px-16 py-12">
              <p className="text-xs text-medium-gray mb-4">現在の設定</p>
              <p className="text-xs font-mono text-charcoal truncate" title={baseUrl || '未設定'}>
                {baseUrl || '未設定'}
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
