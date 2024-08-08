import { PaletteOptions } from "@mui/material";

const colors = {
  black: "#000000",
  white: "#ffffff",
  disabledGray: "#a2aaad",
  boxShadow: "rgba(0, 114, 206, 0.25)",
  highlightedRow: "#0072ce",
  skyBlue: "#66AAE2",
  tagYellow: "#FFCD00",

  primary900: "#00263A",
  primary700: "#234c67",
  primary500: "#3f6d8e",
  primary300: "#7498b5",
  primary100: "#b8d4ea",

  secondary900: "#0072ce",
  secondary700: "#0691ef",
  secondary500: "#5eb1f3",
  secondary300: "#b9dcfa",
  secondary100: "#e2f1fc",

  red700: "#c8102f",
  red500: "#f04957",
  red300: "#ef979d",
  red100: "#f268681a",

  green700: "#38a461",
  green500: "#5ebf81",
  green300: "#a1d8b4",

  neutral900: "#171719",
  neutral800: "#36363A",
  neutral700: "#55565B",
  neutral300: "#BFC0C8",
  neutral200: "#E0E2ED",
  neutral100: "#F3F4FA",
};

export const palette: PaletteOptions = {
  common: {
    black: colors.black,
    white: colors.white,
  },
  active: {
    boxShadow: colors.boxShadow,
    highlightedRow: colors.highlightedRow,
  },
  disabled: {
    gray: colors.disabledGray,
  },
  background: {
    default: colors.skyBlue,
  },
  neutral: {
    main: colors.neutral300,
    dark: colors.neutral700,
    light: colors.neutral300,
    contrastText: colors.black,
    "900": colors.neutral900,
    "800": colors.neutral800,
    "700": colors.neutral700,
    "300": colors.neutral300,
    "200": colors.neutral200,
    "100": colors.neutral100,
  },
  primary: {
    main: colors.primary500,
    light: colors.primary300,
    dark: colors.primary700,
    "900": colors.primary900,
    "700": colors.primary700,
    "500": colors.primary500,
    "300": colors.primary300,
    "100": colors.primary100,
  },
  secondary: {
    main: colors.secondary500,
    light: colors.secondary300,
    dark: colors.secondary700,
    "900": colors.secondary900,
    "700": colors.secondary700,
    "500": colors.secondary500,
    "300": colors.secondary300,
    "100": colors.secondary100,
  },
  error: {
    main: colors.red500,
    light: colors.red300,
    dark: colors.red700,
    "700": colors.red700,
    "500": colors.red500,
    "300": colors.red300,
    "100": colors.red100,
  },
  success: {
    main: colors.green500,
    light: colors.green300,
    dark: colors.green700,
    "700": colors.green700,
    "500": colors.green500,
    "300": colors.green300,
  },
  warning: {
    main: colors.red500,
    light: colors.red300,
    dark: colors.red700,
    "700": colors.red700,
    "500": colors.red500,
    "300": colors.red300,
    "100": colors.red100,
  },
  chip: {
    green: {
      background: "#E0F1EA",
      text: "#084522",
    },
    blue: {
      background: "##E4F8FF",
      text: "#306B75",
    },
    red: {
      background: "#FCCACC",
      text: "#A9170B",
    },
    orange: {
      background: "#FAF3E1",
      text: "#89420c",
    },
  },
  tag: colors.tagYellow,
};
