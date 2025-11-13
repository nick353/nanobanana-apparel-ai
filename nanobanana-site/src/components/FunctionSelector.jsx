import React from 'react';

const FunctionSelector = ({ functions, selectedFunction, onSelect }) => {
  return (
    <aside className="glass-panel p-24 space-y-24 fade-in" aria-label="機能選択メニュー">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-medium-gray">Workflows</p>
        <h2 className="text-[20px] leading-[28px] font-semibold text-charcoal mt-8">AIワークフローを選択</h2>
        <p className="text-sm leading-[22px] text-medium-gray mt-8">
          必要なワークフローを選択してフォームを表示します。
        </p>
      </div>
      <div className="space-y-12">
        {functions.map((fn) => {
          const isActive = fn.id === selectedFunction;
          return (
            <button
              key={fn.id}
              type="button"
              onClick={() => onSelect(fn.id)}
              aria-pressed={isActive}
              className={`w-full text-left rounded-12 border px-16 py-12 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-teal ${
                isActive
                  ? 'border-muted-teal bg-muted-teal/10 shadow-level-2'
                  : 'border-very-light-gray hover:border-muted-teal/50 hover:bg-very-light-gray/50 hover:shadow-level-1'
              }`}
            >
              <div className="flex items-center gap-12">
                <div className={`flex h-44 w-44 items-center justify-center rounded-12 text-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-muted-teal shadow-level-1'
                    : 'bg-very-light-gray text-medium-gray'
                }`}>
                  <span role="img" aria-hidden="true">{fn.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm leading-[20px] transition-colors ${
                    isActive ? 'text-muted-teal' : 'text-charcoal'
                  }`}>
                    {fn.name}
                  </p>
                  <p className="text-xs leading-[18px] text-medium-gray mt-4 truncate">
                    {fn.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default FunctionSelector;
