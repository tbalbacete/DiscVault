import { styled } from "@/styles";
import { Chip } from "@mui/material";
import { Check, X } from "phosphor-react";

export const StyledGreenChip = styled(Chip)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: theme.palette.success[300],
  color: theme.palette.success[700],
  fontWeight: 700,
  border: "none",
  "&:hover": {
    backgroundColor: theme.palette.success[300],
  },
  "&:focus": {
    backgroundColor: theme.palette.success[300],
    boxShadow: `${theme.palette.success[700]} 0px 0px 0px 1px`,
    border: `${theme.palette.common.white} solid 1px`,
  },
}));

export const StyledCheck = styled(Check)(({ theme }) => ({
  color: theme.palette.success[700],
}));

export const StyledRedChip = styled(Chip)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: theme.palette.error[300],
  color: theme.palette.error[700],
  fontWeight: 700,
  border: "none",
  "&:hover": {
    backgroundColor: theme.palette.error[300],
  },
  "&:focus": {
    backgroundColor: theme.palette.error[300],
    boxShadow: `${theme.palette.error[700]} 0px 0px 0px 1px`,
    border: `${theme.palette.common.white} solid 1px`,
  },
}));

export const StyledX = styled(X)(({ theme }) => ({
  color: theme.palette.error[700],
}));
