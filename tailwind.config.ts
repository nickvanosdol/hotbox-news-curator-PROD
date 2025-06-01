// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        appear: 'appear 0.01s linear forwards',
      },
    },
  },
  // Make sure your content paths are correct for Next.js
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
};
