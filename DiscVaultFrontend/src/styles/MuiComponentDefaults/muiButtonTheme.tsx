import { Components, Theme } from "@mui/material";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableFocusRipple: true,
    disableTouchRipple: true,
    disableRipple: true,
    variant: "primary",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "none",
      borderRadius: "8px",
      border: `${theme.palette.primary[900]} solid 2px`,
      color: theme.palette.common.white,
      fontSize: theme.typography.button.fontSize,
      letterSpacing: 0.2,
      fontWeight: 600,
      padding: "10px 22px",
      height: "48px",
      margin: 0,
      gap: "2px",
      whiteSpace: "nowrap",
      "&:focus-visible": {
        textDecoration: "underline",
        textUnderlineOffset: 1,
        textDecorationThickness: 2,
        boxShadow: `${theme.palette.primary[500]} 0px 0px 0px 2px`,
        border: `${theme.palette.common.white} solid 2px`,
      },
      "&:active": {
        textDecoration: "none",
      },
      "&:disabled": {
        opacity: 0.38,
      },
    }),
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        padding: "4px 14px",
        height: "40px",
      },
    },
    {
      props: { variant: "primary" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.primary[900],
        border: `${theme.palette.common.white} solid 2px`,
        "&:hover": {
          backgroundColor: theme.palette.primary[300],
          border: `${theme.palette.primary[300]} solid 2px`,
        },
        "&:active": {
          boxShadow: `0px 0px 0px 0px`,
          backgroundColor: theme.palette.primary[700],
          border: `${theme.palette.primary[700]} solid 2px`,
        },
      }),
    },
    {
      props: { variant: "primary-inverted" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.common.white,
        color: theme.palette.primary[900],
        "&:hover": {
          backgroundColor: theme.palette.primary[100],
          border: `${theme.palette.primary[100]} solid 2px`,
        },
        "&:active": {
          boxShadow: `0px 0px 0px 0px`,
          backgroundColor: theme.palette.common.white,
          border: `${theme.palette.primary[700]} solid 2px`,
        },
        "&:focus-visible": {
          backgroundColor: theme.palette.primary[100],
          color: theme.palette.primary[500],
          boxShadow: `${theme.palette.primary[500]} 0px 0px 0px 2px, ${theme.palette.primary[500]} 0px 0px 0px 2px inset`,
          border: `${theme.palette.common.white} solid 2px`,
        },
      }),
    },
    {
      props: { variant: "secondary" },
      style: ({ theme }) => ({
        color: theme.palette.common.white,
        border: `${theme.palette.secondary[900]} solid 2px`,
        backgroundColor: theme.palette.secondary[900],
        "&:hover": {
          backgroundColor: theme.palette.secondary[500],
          border: `${theme.palette.secondary[500]} solid 2px`,
        },
        "&:focus-visible": {
          backgroundColor: theme.palette.secondary[100],
          color: theme.palette.secondary[700],
          boxShadow: `${theme.palette.secondary[700]} 0px 0px 0px 2px, ${theme.palette.secondary[700]} 0px 0px 0px 2px inset`,
          border: `${theme.palette.common.white} solid 2px`,
        },
        "&:active": {
          backgroundColor: theme.palette.secondary[300],
          border: `${theme.palette.secondary[700]} solid 2px`,
          boxShadow: "none",
          textDecoration: "none",
          color: theme.palette.secondary[700],
        },
        "&:disabled": {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.secondary[500],
        },
      }),
    },
    {
      props: { variant: "warning" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.warning[700],
        border: `${theme.palette.warning[700]} solid 2px`,
        "&:focus-visible": {
          boxShadow: `${theme.palette.warning[500]} 0px 0px 0px 2px`,
          border: `${theme.palette.warning[700]} solid 2px`,
        },
        "&:hover": {
          backgroundColor: theme.palette.warning[300],
          border: `${theme.palette.warning[300]} solid 2px`,
        },
        "&:active": {
          backgroundColor: theme.palette.warning[700],
          border: `${theme.palette.warning[700]} solid 2px`,

          boxShadow: "none",
        },
      }),
    },
  ],
};
