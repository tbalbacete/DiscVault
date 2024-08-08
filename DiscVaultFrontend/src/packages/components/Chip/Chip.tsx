import * as React from "react";
import { StyledCheck, StyledGreenChip, StyledRedChip, StyledX } from "./Chip.styles";
import { theme } from "@/styles";

export interface ChipProps {
  title: string;
  variant: "green" | "red";
  icon?: boolean;
}

export const Chip: React.FC<ChipProps> = ({ title, variant, icon = false }) => {
  return (
    <>
      {variant === "green" ? (
        <StyledGreenChip
          label={title.toLocaleUpperCase()}
          onDelete={() => {}}
          deleteIcon={icon ? <StyledCheck color={theme.palette.success[700]} /> : <></>}
        />
      ) : (
        <StyledRedChip
          label={title.toLocaleUpperCase()}
          onDelete={() => {}}
          deleteIcon={icon ? <StyledX color={theme.palette.error[700]} /> : <></>}
        />
      )}
    </>
  );
};
