import React, { useState, useRef } from 'react';

const ImageUploader = ({
  id,
  label,
  description,
  onFileSelect,
  preview,
  accept = 'image/*',
  required = false,
  helperText,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = (files) => {
    const file = files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragover') {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  };

  return (
    <div className="space-y-12">
      <label htmlFor={id} className="block text-sm leading-[20px] font-semibold text-charcoal">
        {label} {required && <span className="text-warm-coral">*</span>}
      </label>
      <div
        className={`rounded-12 border-2 border-dashed p-24 text-center transition-all duration-200 cursor-pointer ${
          isDragging
            ? 'border-muted-teal bg-muted-teal/5 shadow-level-2 scale-[1.02]'
            : 'border-light-gray hover:border-muted-teal/50 hover:bg-very-light-gray/30'
        } focus-within:ring-4 focus-within:ring-muted-teal/10 focus-within:border-muted-teal`}
        onDragOver={handleDragOver}
        onDragEnter={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
        aria-label={`${label}をアップロード`}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="w-48 h-48 rounded-12 bg-muted-teal/10 flex items-center justify-center text-muted-teal text-2xl">
            📸
          </div>
          <p className="text-sm text-charcoal">
            画像をドラッグ＆ドロップ、または
            <span className="text-muted-teal font-semibold"> ファイルを選択</span>
          </p>
          {description && <p className="text-xs text-medium-gray mt-4">{description}</p>}
        </div>
        <input
          id={id}
          ref={inputRef}
          type="file"
          accept={accept}
          className="sr-only"
          onChange={(event) => handleFiles(event.target.files)}
        />
      </div>
      {helperText && <p className="text-xs text-medium-gray">{helperText}</p>}
      {preview && (
        <div className="rounded-12 border border-light-gray bg-soft-white p-12 shadow-card">
          <img
            src={`data:image/*;base64,${preview}`}
            alt="アップロードプレビュー"
            className="h-auto max-h-[300px] w-full rounded-8 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
