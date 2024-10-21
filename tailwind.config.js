module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: '#464647',
        customGradiantFrom: '#C04848',
        customGradiantTo: '#480048',
        customOrange: '#F6931E',
        customBg: '#E0E2E9',
        customText: '#868D94',
        customGray: "#CFCFCF",
        customLight: '#F1F6FB',
        customDarkGray: '#7C7C7C',
        customColorNav: '#5D5D5D',
        customLightColor: '#F1EFEF',
        customBlackLight: '#1E1E1E',
        customBorderColor: '#d9d9d9',
        customGrayLine: '#A5A8AB',
        customLightOrange: '#FBD4A5',
        customBgButton: '#E5E5ED',
        customExtralight: '#f5e9db',
        customGraySelect: '#F4F4F4',
        customBlackC1: '#1C1C1C',
        customText: '#a4a4a4',
        customCard1: '#ebe4eb',
        customCard2: '#f7ebeb',
        customDotBg: '#f2f2f2',
        customBgYellow: '#fef5ed',
        customBgCount: '#EDE5ED',
        customBgGreen: '#EBFFF6',
        customGreen: "#006F39",
        customBgRed: '#FFF2F1',
        customRed: '#FF1400',
        customTextColor: '#3C4043',
        customSeen: '#6C7074',
      },
      border: {
        'custom': 'rgba(28, 28, 28, 0.1)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
