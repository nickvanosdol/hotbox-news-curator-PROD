module.exports = {
  theme: {
    extend: {
      //   cursor: {
      //     fire: 'url(/cursors/fire.png), 10 10, default',
      //     newtab: 'url(/cursors/new-tab.png), 10 10, pointer',
      //   },
      fontFamily: {
        specialElite: ['var(--font-special-elite)'],
        inter: ['var(--font-inter)'],
      },
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
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
};
