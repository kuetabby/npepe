/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1720px",
    },

    // background: linear-gradient(180deg, #C5D1FF 0%, #385AD3 100%);

    extend: {
      textColor: {
        primary: "#385AD3",
        secondary: "#C5D1FF",

        "nav-title": "#98FF98",
        "pelu-red": "#8b2c12",
        "pelu-green": "#578c3c",

        "dark-main": "#151515",
        "dark-secondary": "#27262c",
        "light-main": "#D2D6EE",
      },
      backgroundColor: {
        primary: "#385AD3",
        secondary: "#C5D1FF",

        "dark-main": "#151515",
        "dark-secondary": "#27262c",
        "dark-tertiary": "#205d7d",
        "dark-hover": "#99a1bd14",

        grayscale: "#111114",
        pelu: "#b5e1fc",
        "pelu-red": "#8b2c12",
        "pelu-green": "#578c3c",

        "nav-scroll": "#DD6B20",

        "light-primary": "#FFF",
        "light-secondary": "#E2EAF4",
      },
      backgroundImage: () => ({
        vector: "url(/app-vector.png)",

        "dark-primary": "linear-gradient(to right, #151515, rgb(19, 24, 35))",
        "dark-fade":
          "linear-gradient(to right, #151515, #131823, rgb(19, 24, 35))",
      }),
      borderColor: {
        primary: "#385AD3",
        secondary: "#C5D1FF",

        "pelu-red": "#8b2c12",

        "dark-main": "#8F8686",
        "light-main": "#D2D6EE",
      },
      keyframes: {
        lightning: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.25,
          },
          "80%": {
            opacity: 0.5,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        pulse: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          // "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
        shadowColorChange: {
          "0%": {
            boxShadow: "0px 0px 10px 5px #ee3a00",
          },
          "33%": {
            boxShadow: "0px 0px 10px 5px #17e8fe",
          },
          "66%": {
            boxShadow: "0px 0px 10px 5px #e23bfd",
          },
          "100%": {
            boxShadow: "0px 0px 10px 5px #eb7744",
          },
          // "100%": {
          //   boxShadow: "0px 0px 10px 5px #895335",
          // },
        },
        lightSpeedInLeft: {
          "0%": {
            transform: "translateX(-100%) skewX(-30deg)",
            opacity: 0,
          },
          "60%": {
            transform: "translateX(20%) skewX(20deg)",
            opacity: 1,
          },
          "80%": {
            transform: "translateX(-5%) skewX(-5deg)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInFromTop: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInFromRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInFromBottom: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      animation: {
        pulse: "pulse 1s infinite",
        pulseBasic: "pulse 1s ease",
        bounceSlow: "bounce 1.5s infinite",
        slideInTopBasic: "slideInFromTop 1s ease-out",
        slideInRightBasic: "slideInFromRight 1s ease",
        slideInLeftBasic: "slideInFromLeft 1s ease",
        slideInBottomBasic: "slideInFromBottom 1s ease",
        slideInTopFast: "slideInFromTop 0.5s ease-out",
        slideInRightFast: "slideInFromRight 0.5s ease",
        slideInLeftFast: "slideInFromLeft 0.5s ease",
        slideInBottomInstant: "slideInFromBottom 0.25s ease",
        lightSpeedInLeftFast: "lightSpeedInLeft 0.5s ease-out",
        lightSpeedInLeftBase: "lightSpeedInLeft 1s ease-out",
        fadeInInstant: "fadeIn 0.25s ease",
        fadeInBasic: "fadeIn 0.5s ease",
        fadeInBase: "fadeIn 1s ease",
        fadeInLame: "fadeIn 2s ease",
        spinSlow: "spin 5s linear infinite",
        lightningBase: "lightning 2s infinite",
        shadowColorChangeMythical: "shadowColorChange 5s infinite",
        typingBasic: "typing 2s steps(20, end)",
      },
      boxShadow: {
        "dark-shadow": "inset 0 0 0 1px #202835",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
