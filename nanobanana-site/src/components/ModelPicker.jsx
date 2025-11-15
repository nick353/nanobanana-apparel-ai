import React, { useMemo, useState } from 'react';

const columnClassMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
};

const ModelPicker = ({
  label,
  helperText,
  options,
  value,
  onChange,
  columns = 2,
  size = 'md',
  enableSearch = false,
}) => {
  const gridClass = columnClassMap[columns] || columnClassMap[2];
  const paddingClass = size === 'sm' ? 'px-12 py-10' : 'px-16 py-14';
  const [query, setQuery] = useState('');

  const filteredOptions = useMemo(() => {
    if (!enableSearch || !query.trim()) return options;
    const lower = query.toLowerCase();
    return options.filter(
      (opt) =>
        opt.label.toLowerCase().includes(lower) ||
        (opt.description || '').toLowerCase().includes(lower),
    );
  }, [enableSearch, options, query]);

  return (
    <div className="space-y-10">
      <div>
        <p className="text-sm font-semibold text-charcoal leading-[20px]">{label}</p>
        {helperText && (
          <p className="text-xs text-medium-gray mt-4">{helperText}</p>
        )}
      </div>
      {enableSearch && (
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="フィルター..."
            className="w-full rounded-10 border border-very-light-gray bg-white px-12 py-10 text-sm text-charcoal placeholder:text-medium-gray focus:border-muted-teal focus:outline-none focus:ring-2 focus:ring-muted-teal/20 transition-all"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-10 top-1/2 -translate-y-1/2 text-medium-gray hover:text-charcoal text-sm"
              aria-label="フィルターをクリア"
            >
              ×
            </button>
          )}
        </div>
      )}
      <div className={`grid gap-12 ${gridClass}`}>
        {filteredOptions.map((option) => {
          const isActive = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`text-left rounded-12 border transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-teal ${paddingClass} ${
                isActive
                  ? 'border-muted-teal bg-muted-teal-light shadow-level-2'
                  : 'border-very-light-gray bg-soft-white hover:border-muted-teal/60 hover:shadow-level-1'
              }`}
              aria-pressed={isActive}
            >
              <div className="flex items-center gap-10">
                <span
                  className={`flex h-24 w-24 items-center justify-center rounded-full text-xs font-semibold ${
                    isActive ? 'bg-muted-teal text-white' : 'bg-very-light-gray text-medium-gray'
                  }`}
                  aria-hidden="true"
                >
                  {isActive ? '✓' : option.icon || ''}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-charcoal">{option.label}</p>
                  {option.description && (
                    <p className="text-xs text-medium-gray mt-4">{option.description}</p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ModelPicker;
