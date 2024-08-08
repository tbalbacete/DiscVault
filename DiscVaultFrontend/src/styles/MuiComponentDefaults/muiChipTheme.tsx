import { Components, Theme } from "@mui/material";
import { ChipColor } from "../themeTypes";

const getChipsCSS = (theme: Theme, color: ChipColor) => ({
  backgroundColor: theme.palette.chip[color].background,
  color: theme.palette.chip[color].text,
  borderRadius: "4px",
  fontWeight: 600,
  border: "none",
  "&:hover": {
    backgroundColor: theme.palette.chip[color].background,
    opacity: 1,
  },
  "&:focus": {
    backgroundColor: theme.palette.chip[color].background,
    boxShadow: "none",
    border: "none",
  },
});

export const MuiChip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.secondary[100],
      border: `1px solid ${theme.palette.secondary[300]}`,
      color: theme.palette.secondary[900],
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "16px",
      height: "40px",
      borderRadius: "32px",
      transition: "all 0.3s ease-in-out",
      "& .MuiChip-icon, & .MuiChip-deleteIcon": {
        color: theme.palette.secondary[900],
        height: "18px",
        width: "auto",
        padding: "0 4px",
      },
      "& .MuiChip-deleteIcon:hover": {
        color: theme.palette.secondary[900],
      },
      "&:hover": {
        backgroundColor: theme.palette.secondary[100],
        opacity: 0.8,
      },
      "&:focus": {
        backgroundColor: theme.palette.secondary[100],
        boxShadow: `${theme.palette.secondary[700]} 0px 0px 0px 1px, ${theme.palette.secondary[300]} 0px 0px 0px 1px inset`,
        border: `${theme.palette.common.white} solid 1px`,
      },
    }),
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        height: "30px",
      },
    },
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.secondary[700]}`,
        color: theme.palette.secondary[700],
        "&:hover": {
          backgroundColor: "transparent !important",
        },
        "&:focus": {
          backgroundColor: "transparent !important",
          boxShadow: `${theme.palette.secondary[700]} 0px 0px 0px 1px, ${theme.palette.secondary[700]} 0px 0px 0px 1px inset`,
        },
        "& .MuiChip-icon, & .MuiChip-deleteIcon": {
          color: theme.palette.secondary[700],
        },
      }),
    },
    {
      props: { variant: "green" },
      style: ({ theme }) => getChipsCSS(theme, "green"),
    },
    {
      props: { variant: "blue" },
      style: ({ theme }) => getChipsCSS(theme, "blue"),
    },
    {
      props: { variant: "red" },
      style: ({ theme }) => getChipsCSS(theme, "red"),
    },
    {
      props: { variant: "orange" },
      style: ({ theme }) => getChipsCSS(theme, "orange"),
    },
  ],
};
