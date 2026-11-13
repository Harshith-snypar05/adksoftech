import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B2A5E', 900: '#071A3D', 700: '#12397F', 100: '#E6ECF7', 50: '#F4F7FC' },
        brand: { DEFAULT: '#FF6A13', 600: '#E85A08', 100: '#FFE6D5', 50: '#FFF5EE' },
        sun: '#FFB400',
        flame: '#E5322D',
        azure: '#1E88E5',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: { marquee: 'marquee 38s linear infinite', floaty: 'floaty 6s ease-in-out infinite' },
    },
  },
  plugins: [],
}

export default config
