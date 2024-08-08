import { Box, IconButton, Paper, styled } from "@mui/material";

export const StyledCard = styled(Paper)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary[900],
  display: "inline-flex",
  flexDirection: "column",
  padding: "22px",
  gap: "20px",
  borderRadius: "8px",
  "&:focus-visible": {
    outline: "none",
  },
  [theme.breakpoints.down("tablet")]: {
    maxWidth: "332px",
  },
}));

export const StyledTitleRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
});

export const StyledIconButton = styled(IconButton)({
  marginTop: "-14px",
  marginRight: "-14px",
});

export const StyledContent = styled(Box)({
  display: "flex",
});

export const StyledButtonRow = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  gap: "20px",
  alignSelf: "stretch",
});
