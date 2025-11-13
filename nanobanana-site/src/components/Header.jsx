import React from 'react';

const Header = ({ onOpenSettings, baseUrl }) => {
  return (
    <header className="glass-panel p-24 flex flex-col gap-16 md:flex-row md:items-center md:justify-between fade-in" aria-label="NanoBanana サイトヘッダー">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-dusty-purple font-semibold">NanoBanana</p>
        <h1 className="text-[28px] leading-[36px] font-semibold text-charcoal mt-8">
          AI-Powered Apparel Design Studio
        </h1>
        <p className="text-sm leading-[22px] text-medium-gray mt-12">
          9つのAIワークフローでアパレル制作をスピードアップ
        </p>
      </div>

      <div className="flex flex-col gap-12 md:items-end">
        <div className="text-xs text-medium-gray" aria-live="polite">
          <span className="uppercase tracking-[0.2em] font-medium">Webhook Base URL</span>
          <p className="font-semibold text-muted-teal truncate max-w-[240px] mt-4" title={baseUrl || '未設定'}>
            {baseUrl || '未設定'}
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenSettings}
          className="inline-flex items-center gap-8 rounded-8 bg-muted-teal text-white px-20 py-12 text-sm font-medium shadow-level-2 hover:bg-muted-teal-hover hover:-translate-y-0.5 active:bg-muted-teal-active active:scale-98 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-teal transition-all duration-150"
        >
          <span role="img" aria-hidden="true">⚙️</span>
          設定を開く
        </button>
      </div>
    </header>
  );
};

export default Header;
