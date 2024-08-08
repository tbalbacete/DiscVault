import { theme } from "@/styles";
import { styled, Box } from "@mui/material";

export const StyledModalContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: `1px solid ${theme.palette.common.white}`,
  boxShadow:
    "0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
  borderRadius: "8px",
  "&:focus-visible": {
    outline: "none",
  },
});
