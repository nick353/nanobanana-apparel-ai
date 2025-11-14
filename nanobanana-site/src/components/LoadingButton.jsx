import React from 'react';

const LoadingButton = ({
  loading,
  children,
  loadingText = '処理中...',
  className = '',
  icon,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`relative inline-flex items-center justify-center gap-8 transition-all duration-150 ${className}`}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-20 h-20 animate-spin text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      <span className={`inline-flex items-center gap-8 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {icon && <span role="img" aria-hidden="true">{icon}</span>}
        {loading ? loadingText : children}
      </span>
    </button>
  );
};

export default LoadingButton;
