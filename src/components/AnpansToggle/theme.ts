import { darkColors, lightColors } from "../../theme/colors";
import { AnpansToggleTheme } from "./types";

export const light: AnpansToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: AnpansToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
