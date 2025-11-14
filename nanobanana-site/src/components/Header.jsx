import React, { useState, useRef, useEffect } from 'react';

const Header = ({ onOpenSettings, baseUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  return (
    <header className="glass-panel p-24 flex flex-col gap-16 md:flex-row md:items-center md:justify-between fade-in" aria-label="NanoBanana サイトヘッダー">
      <div>
        <div className="flex items-center gap-12">
          <div className="flex items-center justify-center w-48 h-48 rounded-12 bg-gradient-to-br from-muted-teal to-dusty-purple shadow-level-2">
            <span className="text-2xl" role="img" aria-hidden="true">🍌</span>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-dusty-purple font-bold">NANOBANANA</p>
            <p className="text-xs text-medium-gray mt-2">AI Design Studio</p>
          </div>
        </div>
        <h1 className="text-[24px] leading-[32px] font-semibold text-charcoal mt-16">
          AI-Powered Apparel Design
        </h1>
        <p className="text-sm leading-[22px] text-medium-gray mt-8">
          9つのAIワークフローでアパレル制作をスピードアップ
        </p>
      </div>

      <div className="flex flex-col gap-12 md:items-end relative" ref={menuRef}>
        <div className="text-xs text-medium-gray" aria-live="polite">
          <span className="uppercase tracking-[0.2em] font-medium">Status</span>
          <div className="flex items-center gap-8 mt-4">
            <div className={`w-8 h-8 rounded-full ${baseUrl ? 'bg-soft-gold animate-pulse' : 'bg-light-gray'}`}></div>
            <p className="font-semibold text-charcoal text-sm">
              {baseUrl ? '接続済み' : '未設定'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center gap-8 rounded-8 bg-very-light-gray text-charcoal px-16 py-10 text-sm font-medium shadow-level-1 hover:bg-light-gray hover:shadow-level-2 active:scale-98 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-teal transition-all duration-150"
          aria-expanded={isMenuOpen}
        >
          <span role="img" aria-hidden="true">⚙️</span>
          <span>メニュー</span>
          <svg className={`w-16 h-16 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-8 w-64 glass-panel shadow-level-4 rounded-12 overflow-hidden fade-in z-50">
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
                <p className="text-sm font-medium text-charcoal">Webhook設定</p>
                <p className="text-xs text-medium-gray mt-2">Base URLを設定</p>
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
