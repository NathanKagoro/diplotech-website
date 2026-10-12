import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0B7A97',
        'brand-dark-hover': '#096A84',
        'brand-primary': '#2F95AF',
        'brand-light': '#78B7C9',
        'brand-softer': '#CFE6EE',
        'brand-gold': '#C9A24A',
        'heading': '#0F1720',
        'body': '#42525B',
        'border': '#D7E5EA',
        'surface-light': '#F8FAFB',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '44px',
        '6xl': '52px',
        '7xl': '68px',
      },
      spacing: {
        'gutter': '24px',
        'section': '80px',
      },
      lineHeight: {
        'tight': '1.2',
        'normal': '1.5',
        'relaxed': '1.75',
      },
    },
  },
  plugins: [],
}
export default config
