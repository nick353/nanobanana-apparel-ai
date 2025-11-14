import React, { useState, useMemo } from 'react';

const FunctionSelector = ({ functions, selectedFunction, onSelect }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFunctions = useMemo(() => {
    if (!searchQuery.trim()) return functions;

    const query = searchQuery.toLowerCase();
    return functions.filter(fn =>
      fn.name.toLowerCase().includes(query) ||
      fn.description.toLowerCase().includes(query)
    );
  }, [functions, searchQuery]);

  return (
    <aside className="glass-panel p-24 space-y-24 fade-in" aria-label="機能選択メニュー">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-medium-gray">Workflows</p>
        <h2 className="text-[20px] leading-[28px] font-semibold text-charcoal mt-8">AIワークフローを選択</h2>
        <p className="text-sm leading-[22px] text-medium-gray mt-8">
          必要なワークフローを選択してフォームを表示します。
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-12 flex items-center pointer-events-none">
          <svg className="w-16 h-16 text-medium-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ワークフローを検索..."
          className="w-full pl-40 pr-12 py-10 rounded-12 border border-light-gray bg-soft-white text-sm text-charcoal placeholder:text-medium-gray focus:border-muted-teal focus:outline-none focus:ring-2 focus:ring-muted-teal/20 transition-all duration-150"
          aria-label="ワークフロー検索"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-12 flex items-center text-medium-gray hover:text-charcoal transition-colors"
            aria-label="検索クリア"
          >
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {filteredFunctions.length === 0 && (
        <div className="text-center py-24">
          <p className="text-sm text-medium-gray">
            「{searchQuery}」に一致するワークフローが見つかりません
          </p>
        </div>
      )}

      <div className="space-y-12">
        {filteredFunctions.map((fn) => {
          const isActive = fn.id === selectedFunction;
          const isHovered = hoveredId === fn.id;
          return (
            <button
              key={fn.id}
              type="button"
              onClick={() => onSelect(fn.id)}
              onMouseEnter={() => setHoveredId(fn.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-pressed={isActive}
              className={`group relative w-full text-left rounded-12 border px-16 py-14 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-teal ${
                isActive
                  ? 'border-muted-teal bg-muted-teal/10 shadow-level-2 scale-[1.02]'
                  : 'border-very-light-gray hover:border-muted-teal/50 hover:bg-very-light-gray/50 hover:shadow-level-2 hover:scale-[1.01] hover:-translate-y-0.5'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 rounded-12 bg-gradient-to-r from-muted-teal/5 to-dusty-purple/5 pointer-events-none"></div>
              )}
              <div className="flex items-center gap-12 relative z-10">
                <div className={`flex h-48 w-48 items-center justify-center rounded-12 text-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-br from-muted-teal to-muted-teal-hover text-white shadow-level-2 scale-110'
                    : isHovered
                    ? 'bg-muted-teal/20 text-muted-teal scale-105'
                    : 'bg-very-light-gray text-medium-gray'
                }`}>
                  <span role="img" aria-hidden="true">{fn.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm leading-[20px] transition-colors ${
                    isActive ? 'text-muted-teal' : 'text-charcoal group-hover:text-muted-teal'
                  }`}>
                    {fn.name}
                  </p>
                  <p className={`text-xs leading-[18px] mt-4 transition-all duration-200 ${
                    isActive || isHovered ? 'text-charcoal' : 'text-medium-gray truncate'
                  }`} title={fn.description}>
                    {fn.description}
                  </p>
                </div>
                {isActive && (
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-muted-teal text-white text-xs checkmark-animate">
                    ✓
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default FunctionSelector;
