import type { Config } from "tailwindcss";
import {
  bpSmallToMedium,
  bpMediumToLarge,
  bpLargeToXlarge,
  bpXlargeToXXlarge,
} from "./app/const/sizes";
import {
  saltWhite,
  lightGray,
  mint,
  lightMint,
  gray,
  charcoal,
  mediumGray,
  veryLightGray,
  backgroundDark,
  disabledGray,
  backgroundMedium,
  white,
  darkMint,
  disabled,
  underlineGrey,
  semanticGrayWeak,
  primaryMintHover,
  secondaryMintHover,
  errorToast,
  successToast,
  translucentDarkMint,
  lightGreen,
  darkGreen,
  lightRed,
  darkRed,
  songtradrOrange,
  semiTransparentBlack,
} from "./app/styles/themeColors";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "fill-available": "-webkit-fill-available",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        "semantic-primary-text": saltWhite,
        "semantic-primary-text-hover": lightGray,
        "semantic-secondary-accent": mint,
        "semantic-secondary-bg-hover": lightMint,
        "semantic-gray-bg": gray,
        "semantic-gray-bg-weak": charcoal,
        "semantic-gray-bg-medium": mediumGray,
        "semantic-gray-bg-strong": veryLightGray,
        "semantic-gray-bg-hover": backgroundDark,
        "semantic-gray-bg-disabled": disabledGray,
        "semantic-background-base": backgroundDark,
        "semantic-background-middle": backgroundMedium,
        "semantic-background-top": white,
        "component-primary-btn-bg": mint,
        "component-primary-btn-bg-hover": darkMint,
        "semantic-disabled": disabled,
        "title-underline-grey": underlineGrey,
        "semantic-gray-weak": semanticGrayWeak,
        "primary-mint-hover": primaryMintHover,
        "secondary-mint-hover": secondaryMintHover,
        "error-toast": errorToast,
        "success-toast": successToast,
        "component-dark-mint-background-translucent": translucentDarkMint,
        "button-primary-btn-bg": lightGreen,
        "button-primary-btn-bg-hover": darkGreen,
        "button-secondary-btn-bg": lightRed,
        "button-secondary-btn-bg-hover": darkRed,
        "sematic-songtradr-orange": songtradrOrange,
        "semi-transparent": semiTransparentBlack,
      },
      fontSize: {
        xxs: "10px",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        "pulse-slow": "pulse 6s normal infinite",
        "spin-fast": "spin 0.5s linear infinite",
        "slide-in": "slide-in 0.2s ease-out forwards",
        "slide-out": "slide-out 0.2s ease-in forwards",
      },
      transitionProperty: {
        height: "height",
      },
      spacing: {
        contentMargin: "max(1rem, min(7vw, 6rem))",
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
        "20": "repeat(20, minmax(0, 1fr))",
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(270deg, rgba(53, 157, 158, 0) 0%, rgba(53, 157, 158, 0.1) 100%)",
        "gray-gradient":
          "linear-gradient(360deg, rgba(71,71,71) 35%, rgba(7,20,28) 100%)",
      },
      height: {
        "mobile-hero": "calc(70vw / 0.96)",
      },
    },
    screens: {
      sm: "0px",
      // this is min-width so sm is between 0 and 481px
      md: `${bpSmallToMedium + 1}px`,
      lg: `${bpMediumToLarge + 1}px`,
      xl: `${bpLargeToXlarge + 1}px`,
      "2xl": `${bpXlargeToXXlarge + 1}px`,
      fontSizeBp: "601px",
      creditsSm: "537px",
      signUpBp: "1200px",
      searchMd: "1015px",
      searchLg: "1200px",
      creditsLg: "1300px",
      searchXl: "1600px",
      aboutSm: "1050px",
      aboutLg: "1250px",
    },
  },
  variants: {
    fill: ["hover", "focus"], // activate :hover state for fill-current class (svg)
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
