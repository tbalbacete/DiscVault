import { Components, Theme } from "@mui/material";

export const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  defaultProps: {
    disableFocusRipple: true,
    disableTouchRipple: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.common.white,
      padding: "8px",
      borderRadius: "4px",
      width: "40px",
      height: "40px",
      backgroundColor: theme.palette.primary[900],
      border: `${theme.palette.primary[900]} solid 2px`,
      "&:hover": {
        color: theme.palette.primary[500],
        backgroundColor: theme.palette.primary[100],
        border: `${theme.palette.primary[100]} solid 2px`,
      },
      "&:focus": {
        color: theme.palette.primary[500],
        border: `${theme.palette.primary[500]} solid 2px`,
      },
      "&:active": {
        color: theme.palette.primary[700],
        backgroundColor: theme.palette.primary[300],
        border: `${theme.palette.primary[300]} solid 2px`,
      },
      "&:disabled": {
        color: theme.palette.neutral[700],
        opacity: 0.38,
      },
    }),
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        padding: "4px",
        width: "32px",
        height: "32px",
      },
    },
    {
      props: { size: "large" },
      style: {
        padding: "10px",
        width: "48px",
        height: "48px",
      },
    },
    {
      props: { size: "table" },
      style: ({ theme }) => ({
        padding: "1px",
        width: "38px",
        height: "100%",
        borderRadius: 0,
        background: "transparent",
        border: "none",
        "&:hover": {
          border: `${theme.palette.primary[100]} solid 2px`,
        },
      }),
    },
    {
      props: { color: "minimal" },
      style: ({ theme }) => ({
        backgroundColor: "transparent",
        border: "none",
        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          color: theme.palette.common.white,
        },
        "&:focus-visible": {
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          color: theme.palette.common.white,
        },
        "&:focus": {
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          color: theme.palette.common.white,
        },
        "&:active": {
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          color: theme.palette.common.white,
        },
        "&:disabled": {
          boxShadow: "none",
          border: "none",
          backgroundColor: "transparent",
          color: theme.palette.primary[500],
        },
      }),
    },
  ],
};
