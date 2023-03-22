module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: 'var(--color-red)' },
        yellow: { DEFAULT: 'var(--color-yellow)' },
        blue: { DEFAULT: 'var(--color-blue)' },
        green: { DEFAULT: 'var(--color-green)' },
        orange: { DEFAULT: 'var(--color-orange)' },
        grey: { DEFAULT: 'var(--color-grey)' },
        purple: { DEFAULT: 'var(--color-purple)' },
        primary: {
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          DEFAULT: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
        },
        neutral: {
          900: 'var(--color-neutral-900)',
          800: 'var(--color-neutral-800)',
          700: 'var(--color-neutral-700)',
          500: 'var(--color-neutral-500)',
          300: 'var(--color-neutral-300)',
          200: 'var(--color-neutral-200)',
        },
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        'text-lg': '18px',
        'text-2xl': '24px',
        'text-4xl': '36px',
      },
      fontFamily: {
        text: ['PingFang SC'],
        number: ['DIN Alternate'],
      },
      spacing: {
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
        80: '80px',
      },
    },
  },
  plugins: [],
}
