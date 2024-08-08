import { Components, Theme } from "@mui/material";

export const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: "100%",
      fontSize: 14,
      fontWeight: 500,
      color: theme.palette.neutral[900],
      border: `1px solid ${theme.palette.secondary[500]}`,
      borderRadius: "8px",
      backgroundColor: theme.palette.secondary[100],
      padding: "6px 15px",
      "&:focus-within": {
        border: `1px solid ${theme.palette.secondary[500]}`,
        boxShadow: `0px 0px 20px ${theme.palette.active.boxShadow}`,
        backgroundColor: theme.palette.common.white,
        svg: {
          color: theme.palette.primary[300],
        },
      },
      "&.Mui-error": {
        borderColor: theme.palette.error[500],
        backgroundColor: theme.palette.common.white,
        svg: {
          color: theme.palette.error[300],
        },
      },
      "&.Mui-disabled": {
        borderColor: theme.palette.neutral[200],
        backgroundColor: theme.palette.neutral[100],
        svg: {
          color: theme.palette.neutral[700],
        },
      },
      "& .MuiInputBase-inputAdornedEnd": {
        position: "unset !important",
        minWidth: "20px",
      },
      "& .MuiInputBase-input": {
        WebkitTextFillColor: theme.palette.neutral[900],
        fontWeight: 400,
        borderRadius: "8px",
        backgroundColor: "transparent",
        padding: "7px",
        "&::placeholder": {
          WebkitTextFillColor: theme.palette.neutral[700],
          color: theme.palette.neutral[700],
          opacity: 1,
        },
        "&.Mui-disabled": {
          WebkitTextFillColor: theme.palette.neutral[700],
        },
      },
    }),
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        padding: "4px 10px",
        "& .MuiInputBase-input": {
          padding: "5px",
        },
      },
    },
  ],
};
