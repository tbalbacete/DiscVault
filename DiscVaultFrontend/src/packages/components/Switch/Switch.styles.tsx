import { theme } from "@/styles";
import { Box, FormControlLabel, styled } from "@mui/material";

export const StyledBox = styled(Box)({
  "& .Mui-checked": {
    backgroundColor: theme.palette.secondary[700],
    "& + .MuiSwitch-track": {
      backgroundColor: `${theme.palette.secondary[700]} !important`,
    },
  },
  "&:focus-within": {
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.neutral[200],
    },
    "& .Mui-checked": {
      backgroundColor: theme.palette.secondary[700],
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.secondary[300],
      },
    },
  },
  "&:hover": {
    "& .MuiSwitch-track": {
      backgroundColor: theme.palette.neutral[200],
    },
    "& .Mui-checked": {
      backgroundColor: theme.palette.secondary[700],
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.secondary[300],
      },
    },
  },
});

export const StyledFormControl = styled(FormControlLabel)({
  alignItems: "flex-start",
  marginLeft: "-4px",
  "& .MuiFormControlLabel-label": { padding: "0 8px" },
});

export const StyledLabel = styled("label")(({ theme }) => ({
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.05em",
  color: theme.palette.secondary[700],
  marginBottom: 3,
  marginLeft: 1,
}));
