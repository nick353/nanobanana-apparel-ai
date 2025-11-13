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
    <div className="space-y-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`rounded-2xl border-2 border-dashed p-6 text-center transition focus-within:ring-2 focus-within:ring-brand/40 ${
          isDragging ? 'border-brand bg-blue-50/50' : 'border-gray-300'
        }`}
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
        <p className="text-sm text-gray-600">
          画像をドラッグ＆ドロップ、または
          <span className="text-brand font-semibold"> ファイルを選択</span>
        </p>
        {description && <p className="text-xs text-gray-500 mt-2">{description}</p>}
        <input
          id={id}
          ref={inputRef}
          type="file"
          accept={accept}
          className="sr-only"
          onChange={(event) => handleFiles(event.target.files)}
        />
      </div>
      {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
      {preview && (
        <div className="rounded-xl border border-gray-200 bg-white p-3">
          <img
            src={`data:image/*;base64,${preview}`}
            alt="アップロードプレビュー"
            className="h-auto max-h-52 w-full rounded-lg object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
