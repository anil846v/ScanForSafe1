/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-green': '#dcfce7',
        'primary-brand': '#166534',
        'heading-dark': '#064e3b',
        'input-bg': '#f3f4f6',
        'text-main': '#1e293b',
        softGreen: '#dcfce7',
        primaryBrand: '#166534',
        headingDark: '#064e3b',
        inputBg: '#f3f4f6',
        textMain: '#1e293b',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
        pulseSlow: 'pulse 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        pingSlow: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
