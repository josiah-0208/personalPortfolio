/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      transitionProperty: {
        'background-color': 'background-color',
      },
      colors: {
        backgroundColor: 'var(--backgroundColor)',
        backgroundBlue: '#dfeaf7',
        backgroundWhite: 'rgba(247, 247, 252)',
        fontColor: 'var(--fontColor)',
        fontColorSky: 'var(--fontColorSky)',
        fontColorOrange: 'var(--fontColorOrange)',
        fontColorSilver: 'var(--fontColorSilver)',
      },
      // 왜인지는 모르겠는데 colors가 extend 바깥에 있으면 기본 색상이 작동되지 않는다.
    },
  },
  plugins: [],
  darkMode: 'class',
};
