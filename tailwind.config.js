module.exports = {
  content: [
    './App.tsx', // Все компоненты, где используется Tailwind
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('nativewind/tailwindcss-plugin')],
};
