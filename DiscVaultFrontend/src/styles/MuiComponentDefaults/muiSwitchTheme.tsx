import { Components, Theme } from "@mui/material";

export const MuiSwitch: Components<Theme>["MuiSwitch"] = {
  defaultProps: {
    disableFocusRipple: true,
    disableTouchRipple: true,
    disableRipple: true,
    size: "small",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      width: "50px",
      height: "34px",
      padding: "5px",
      "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: "9px",
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: "translateX(16px)",
          color: theme.palette.common.white,
          "& .MuiSwitch-thumb": {
            border: `1px solid ${theme.palette.secondary[700]}`,
          },
          "& + .MuiSwitch-track": {
            opacity: "1 !important",
            border: `1px solid ${theme.palette.secondary[700]}`,
          },
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
          backgroundColor: theme.palette.primary[100],
        },
      },
      "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: "16px",
        height: "16px",
        boxShadow: "none",
        border: `1px solid ${theme.palette.neutral[300]}`,
      },
      "& .MuiSwitch-track": {
        borderRadius: "40px",
        border: `1px solid ${theme.palette.neutral[300]}`,
        backgroundColor: theme.palette.neutral[300],
        opacity: "1 !important ",
      },
    }),
  },
};
