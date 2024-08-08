import { FormHelperText, styled } from "@mui/material";

export const StyledLabel = styled("label")(({ theme }) => ({
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.05em",
  color: theme.palette.secondary[700],
  marginBottom: 3,
  marginLeft: 1,
}));

export const StyledHelperText = styled(FormHelperText)(() => ({
  width: "100%",
  fontWeight: 600,
  fontSize: 11,
  marginLeft: 4,
  marginTop: 5,
}));

export const RequiredSpan = styled("span")(({ theme }) => ({
  color: theme.palette.error[300],
}));
