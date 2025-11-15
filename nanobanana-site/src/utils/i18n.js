export const SUPPORTED_LOCALES = [
  { id: 'ja', label: '日本語' },
  { id: 'en', label: 'English' },
];

export const DEFAULT_LOCALE = 'ja';

export const getLocalizedContent = (definition, locale = DEFAULT_LOCALE) => {
  if (!definition) {
    return { name: '', description: '', tips: [] };
  }

  const fallback = definition.copy?.[DEFAULT_LOCALE] || {
    name: definition.name,
    description: definition.description,
    tips: definition.tips,
  };

  const localized = definition.copy?.[locale] || {};

  return {
    name: localized.name ?? fallback.name ?? definition.name ?? '',
    description: localized.description ?? fallback.description ?? definition.description ?? '',
    tips: localized.tips ?? fallback.tips ?? definition.tips ?? [],
  };
};
