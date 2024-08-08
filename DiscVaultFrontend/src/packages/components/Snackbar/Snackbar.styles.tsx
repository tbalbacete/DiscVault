import { Box, ButtonBase, styled, Typography } from "@mui/material";
import { VariantType } from "notistack";
import { theme } from "@/styles";

const getVariantStyledCard = (variant: string) => {
  if (variant === "success") {
    return {
      backgroundColor: theme.palette.success[300],
      boxShadow: "0px 16px 48px rgba(144, 211, 158, 0.32), 0px 16px 16px rgba(0, 0, 0, 0.08)",
    };
  }
  if (variant === "error") {
    return {
      backgroundColor: theme.palette.error[300],
      boxShadow: "0px 16px 48px rgba(255, 156, 113, 0.32), 0px 16px 16px rgba(0, 0, 0, 0.08)",
    };
  }
  return {
    backgroundColor: theme?.palette.common.white,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
  };
};

export const StyledCard = styled("div")(({ variant }: { variant: VariantType }) => ({
  ...getVariantStyledCard(variant),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  border: "none",
  borderRadius: "4px",
  paddingLeft: "18px",
}));

export const StyledButtonContainer = styled(Box)({
  display: "flex",
  alignSelf: "stretch",
  m: 0,
});

export const StyledTextContainer = styled(Box)({
  padding: "17.5px 18px 17.5px 8px",
});

export const StyledSnackbarText = styled(Typography)({
  fontWeight: 600,
});

export const StyledSnackbarButton = styled(ButtonBase)({
  background: "transparent",
  border: "none",
  fontSize: 14,
  fontWeight: 600,
  lineHeight: "24px",
  padding: "4px 14px",
  "&:hover, &:focus": {
    textDecoration: "underline",
    textDecorationThickness: 2,
    textUnderlineOffset: 1,
  },
});
