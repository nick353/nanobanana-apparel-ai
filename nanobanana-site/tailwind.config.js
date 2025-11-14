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

        // Accent Colors - Enhanced palette
        'muted-teal': '#4FB3A0',
        'muted-teal-hover': '#45A08E',
        'muted-teal-active': '#3D8B7B',
        'muted-teal-light': '#E8F5F2',
        'dusty-purple': '#8B7BB5',
        'dusty-purple-hover': '#7D6DA7',
        'dusty-purple-light': '#F0EDF7',
        'warm-coral': '#F27C7C',
        'warm-coral-light': '#FEF1F1',
        'soft-gold': '#F4C47D',
        'soft-gold-light': '#FEF9EC',
        'sky-blue': '#7FB3D5',
        'sky-blue-light': '#EDF5FA',

        // Success & Error states
        'success-green': '#48BB78',
        'success-green-light': '#E8F8F0',
        'error-red': '#F56565',
        'error-red-light': '#FFF5F5',
        'warning-yellow': '#ECC94B',
        'warning-yellow-light': '#FEFCF0',

        // Legacy aliases for backwards compatibility
        brand: '#4FB3A0',
        'brand-secondary': '#8B7BB5',
        'brand-bg': '#FAF8F5',
        'brand-text': '#2D2D2D',
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '18px', letterSpacing: '0.01em' }],
        'sm': ['14px', { lineHeight: '22px', letterSpacing: '0' }],
        'base': ['16px', { lineHeight: '26px', letterSpacing: '0' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
        'xl': ['20px', { lineHeight: '30px', letterSpacing: '-0.01em' }],
        '2xl': ['24px', { lineHeight: '34px', letterSpacing: '-0.02em' }],
        '3xl': ['30px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
        '4xl': ['36px', { lineHeight: '44px', letterSpacing: '-0.03em' }],
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
