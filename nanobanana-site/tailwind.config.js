/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors (from style guide)
        'warm-cream': '#FAF8F5',
        'charcoal': '#2D2D2D',
        'soft-white': '#FFFFFF',

        // Secondary Colors
        'medium-gray': '#6B7280',
        'light-gray': '#9CA3AF',
        'very-light-gray': '#E5E7EB',

        // Accent Colors
        'muted-teal': '#4FB3A0',
        'muted-teal-hover': '#45A08E',
        'muted-teal-active': '#3D8B7B',
        'dusty-purple': '#8B7BB5',
        'dusty-purple-hover': '#7D6DA7',
        'warm-coral': '#F27C7C',
        'soft-gold': '#F4C47D',
        'sky-blue': '#7FB3D5',

        // Legacy aliases for backwards compatibility
        brand: '#4FB3A0',
        'brand-secondary': '#8B7BB5',
        'brand-bg': '#FAF8F5',
        'brand-text': '#2D2D2D',
      },
      boxShadow: {
        soft: '0 15px 40px rgba(15, 23, 42, 0.08)',
        'level-1': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'level-2': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'level-3': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'level-4': '0 16px 48px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      transitionDuration: {
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
};
