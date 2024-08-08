import { FormControlLabelProps, Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from "@mui/material";
import * as React from "react";
import { StyledBox, StyledFormControl, StyledLabel } from "./Switch.styles";

export type SwitchProps = MuiSwitchProps &
  Pick<FormControlLabelProps, "labelPlacement"> & {
    label?: string;
  };

export const Switch: React.FC<SwitchProps> = ({ label, labelPlacement = "top", onBlur, ...props }) => {
  return (
    <StyledBox sx={{ opacity: props.disabled ? 0.32 : 1 }}>
      <StyledFormControl
        label={<StyledLabel>{label}</StyledLabel>}
        labelPlacement={labelPlacement}
        control={<MuiSwitch {...props} onBlur={onBlur} />}
      />
    </StyledBox>
  );
};
