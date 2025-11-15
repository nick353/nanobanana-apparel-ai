import React, { useEffect, useMemo, useState } from 'react';

const CATEGORY_META = {
  ideation: {
    label: 'コンセプト設計',
    hint: '方向性を決める',
    guide: 'まずはデザインの方向性をテキストで入力し、生成されたラフを基準に次の工程へ。'
  },
  modeling: {
    label: 'モデル & 生成',
    hint: 'モデルや背景を選択',
    guide: 'ターゲットモデルや撮影背景をここで決めておくと、後工程の修正が少なくなります。'
  },
  editing: {
    label: '調整・レタッチ',
    hint: '色や背景を整える',
    guide: 'カラーや背景の微調整、汚れ消しなど最終仕上げのステップに。'
  },
  assets: {
    label: '素材入力',
    hint: '素材や背景を差し替え',
    guide: '支給素材や背景画像を登録しておくと、再生成時にも使い回せます。'
  },
  advanced: {
    label: '高度な指示',
    hint: '自由テキストや複合操作',
    guide: 'プロンプト＋画像など複数条件で制御したい場合に活用してください。'
  },
  others: {
    label: 'その他',
    hint: 'その他のワークフロー',
    guide: '分類が難しい機能はこちら。詳細はカードを参照してください。'
  },
};

const categoryOrder = Object.keys(CATEGORY_META);

const FunctionSelector = ({ functions, selectedFunction, onSelect }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const categoryIds = useMemo(
    () => Array.from(new Set(functions.map((fn) => fn.category || 'others'))),
    [functions],
  );
  const [expandedSections, setExpandedSections] = useState(() =>
    categoryIds.reduce((acc, id) => ({ ...acc, [id]: true }), {}),
  );

  useEffect(() => {
    setExpandedSections(categoryIds.reduce((acc, id) => ({ ...acc, [id]: true }), {}));
  }, [categoryIds]);

  const filteredFunctions = useMemo(() => {
    if (!searchQuery.trim()) return functions;

    const query = searchQuery.toLowerCase();
    return functions.filter(fn =>
      fn.name.toLowerCase().includes(query) ||
      fn.description.toLowerCase().includes(query)
    );
  }, [functions, searchQuery]);

  const groupedFunctions = useMemo(() => {
    const groups = filteredFunctions.reduce((acc, fn) => {
      const key = fn.category || 'others';
      if (!acc[key]) acc[key] = [];
      acc[key].push(fn);
      return acc;
    }, {});

    const orderValue = (key) => {
      const index = categoryOrder.indexOf(key);
      return index === -1 ? Number.MAX_SAFE_INTEGER : index;
    };

    return Object.entries(groups).sort((a, b) => orderValue(a[0]) - orderValue(b[0]));
  }, [filteredFunctions]);

  return (
    <aside
      id="workflow-panel"
      className="glass-panel p-24 space-y-24 fade-in bg-gradient-to-br from-white/95 to-very-light-gray/30"
      aria-label="機能選択メニュー"
    >
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-muted-teal mb-8">Workflows</p>
        <h2 className="text-2xl font-bold text-charcoal">AIワークフローを選択</h2>
        <p className="text-sm leading-[22px] text-medium-gray mt-12">
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

      <div className="space-y-16">
        {groupedFunctions.map(([categoryId, items]) => {
          const sectionMeta = CATEGORY_META[categoryId] || CATEGORY_META.others;
          const isExpanded = expandedSections[categoryId];
          const sectionPanelId = `workflow-section-${categoryId}`;

          return (
            <div
              key={categoryId}
              className="rounded-16 border border-very-light-gray bg-soft-white/80 p-16 shadow-level-1"
            >
              <button
                type="button"
                onClick={() =>
                  setExpandedSections((prev) => ({ ...prev, [categoryId]: !prev[categoryId] }))
                }
                className="flex w-full items-center justify-between gap-16 text-left"
                aria-expanded={isExpanded}
                aria-controls={sectionPanelId}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-medium-gray">
                    {sectionMeta.label}
                  </p>
                  <p className="text-sm text-medium-gray mt-2">{sectionMeta.hint}</p>
                </div>
                <div className="flex items-center gap-12">
                  <span className="rounded-8 bg-muted-teal/10 px-10 py-4 text-xs font-semibold text-muted-teal">
                    {items.length}
                  </span>
                  <svg
                    className={`h-16 w-16 text-medium-gray transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="mt-10 rounded-12 bg-very-light-gray/60 px-12 py-10 text-xs leading-[18px] text-medium-gray">
                <span className="font-semibold text-charcoal mr-4">🧭 ガイド:</span>
                {sectionMeta.guide}
              </div>

              {isExpanded && (
                <div className="mt-16 space-y-12" id={sectionPanelId}>
                  {items.map((fn) => {
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
                        className={`group relative flex w-full items-center gap-12 rounded-12 border px-16 py-14 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-teal ${
                          isActive
                            ? 'border-muted-teal bg-muted-teal-light/60 shadow-level-2'
                            : 'border-very-light-gray hover:border-muted-teal/50 hover:bg-very-light-gray/80 hover:shadow-level-2'
                        }`}
                      >
                        {isActive && (
                          <div className="absolute inset-0 rounded-12 bg-gradient-to-r from-muted-teal/15 to-dusty-purple/5 pointer-events-none"></div>
                        )}
                        <div
                          className={`relative z-10 flex h-48 w-48 items-center justify-center rounded-12 text-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-gradient-to-br from-muted-teal to-muted-teal-hover text-white shadow-level-2 scale-105'
                              : isHovered
                              ? 'bg-muted-teal/20 text-muted-teal scale-105'
                              : 'bg-very-light-gray text-medium-gray'
                          }`}
                        >
                          <span role="img" aria-hidden="true">{fn.icon}</span>
                        </div>
                        <div className="relative z-10 flex-1 min-w-0">
                          <p
                            className={`font-semibold text-sm leading-[20px] transition-colors ${
                              isActive ? 'text-muted-teal' : 'text-charcoal group-hover:text-muted-teal'
                            }`}
                          >
                            {fn.name}
                          </p>
                          <p
                            className={`text-xs leading-[18px] mt-4 transition-all duration-200 ${
                              isActive || isHovered ? 'text-charcoal' : 'text-medium-gray truncate'
                            }`}
                            title={fn.description}
                          >
                            {fn.description}
                          </p>
                        </div>
                        {isActive && (
                          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-muted-teal text-white text-xs checkmark-animate">
                            ✓
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default FunctionSelector;
