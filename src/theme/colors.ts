import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#0080FF",
  primaryBright: "#4DA6FF",
  primaryDark: "#0059B3",
  secondary: "#CD754C",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  ...additionalColors,
  background: "#faf0eb",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E9EAEB",
  contrast: "#28140B",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#F9F0EB",
  inputSecondary: "#EED1C3",
  tertiary: "#EFF4F5",
  text: "#8B4727",
  textDisabled: "#BDC2C4",
  textSubtle: "#D89374",
  disabled: "#E9EAEB",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F9F0EB 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F6EEEA 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #F4E0D7 0%, #EFD1C3 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  ...additionalColors,
  secondary: "#F7BC88",
  background: "#1f1414",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#3B1D12",
  cardBorder: "#A6633F",
  contrast: "#FFFFFF",
  dropdown: "#140A05",
  dropdownDeep: "#100C18",
  invertedContrast: "#28140B",
  input: "#A3613E",
  inputSecondary: "#C78B6B",
  primaryDark: "#0059B3",
  tertiary: "#814D31",
  text: "#FDF2E7",
  textDisabled: "#666171",
  textSubtle: "#f5AE70",
  disabled: "#524B63",
  borderColor: "#A6633F",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #62351D 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #593726 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #B45B31 0%, #CE744b 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #C78B6B 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
