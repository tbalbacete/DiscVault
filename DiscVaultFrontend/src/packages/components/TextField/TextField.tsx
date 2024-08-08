import * as React from "react";
import { InputBaseProps, Box, InputBase } from "@mui/material";
import { StyledLabel, RequiredSpan, StyledHelperText } from "./TextField.styles";

export type TextFieldProps = Omit<InputBaseProps, "error"> & {
  label?: React.ReactNode;
  labelColor?: string;
  labelFontWeight?: number;
  error?: string;
  size?: "small" | "medium";
  labelLeft?: boolean;
  labelWidth?: number;
  required?: boolean;
};

export const TextField = (props: TextFieldProps) => {
  const {
    name,
    label,
    labelColor,
    labelFontWeight,
    disabled,
    required,
    size,
    labelLeft = false,
    labelWidth = 150,
    error,
    multiline,
    ...inputProps
  } = props;
  return (
    <Box
      sx={{
        opacity: disabled ? 0.64 : 1,
        display: "flex",
        flexDirection: labelLeft ? "row" : "column",
      }}
    >
      {label && (
        <StyledLabel
          htmlFor={name}
          sx={{
            color: labelColor,
            fontWeight: labelFontWeight,
            padding: labelLeft ? "16px 8px" : 0,
            minWidth: labelLeft ? labelWidth : "auto",
            maxWidth: labelLeft ? labelWidth : "auto",
          }}
        >
          {label}
          {required && <RequiredSpan> *</RequiredSpan>}
        </StyledLabel>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <InputBase
          {...inputProps}
          autoComplete="off"
          size={size}
          id={name}
          disabled={disabled}
          error={Boolean(error)}
          multiline={multiline}
          sx={{
            alignItems: multiline ? "flex-start" : "center",
            svg: {
              marginTop: multiline ? "7px" : "0px",
            },
          }}
        />
        {error && <StyledHelperText error={Boolean(error)}>{error}</StyledHelperText>}
      </Box>
    </Box>
  );
};
