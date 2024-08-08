import * as React from "react";
import { CustomContentProps, SnackbarContent } from "notistack";
import { theme } from "@/styles";
import { forwardRef, useMemo } from "react";
import { CheckCircle, X, XCircle } from "phosphor-react";
import {
  StyledCard,
  StyledSnackbarText,
  StyledButtonContainer,
  StyledSnackbarButton,
  StyledTextContainer,
} from "./Snackbar.styles";
import { Divider, Link } from "@mui/material";
import { useSnackbar } from "@/hooks/useSnackbar";

declare module "notistack" {
  interface VariantOverrides {
    success: true;
    warning: false;
    error: true;
    info: false;
  }
}

const snackbarOptions = ["success", "error"] as const;
type SnackbarOption = (typeof snackbarOptions)[number];

export interface SnackbarProps {
  message: string;
  id: number;
  variant: SnackbarOption;
}

const variantColorMap = {
  success: [theme.palette.success[500], theme.palette.success[700]],
  error: [theme.palette.error[500], theme.palette.error[700]],
  default: [theme.palette.neutral[200], theme.palette.neutral[200]],
};

export type SnackbarLink = {
  href: string;
  label: string;
};

export type CustomProps = CustomContentProps & { link?: SnackbarLink };

export const Snackbar = forwardRef<HTMLDivElement, Partial<CustomProps>>(({ message, id, variant, link }, ref) => {
  const { dismissSnackbar } = useSnackbar();

  const [dividerColor, iconColor] = useMemo(() => variantColorMap[variant ?? "default"], [variant]);

  return (
    <SnackbarContent ref={ref} style={{ justifyContent: "end" }}>
      <StyledCard variant={variant ?? "default"}>
        {variant === "success" && <CheckCircle size={24} weight="fill" color={iconColor} />}
        {variant === "error" && <XCircle size={24} weight="fill" color={iconColor} />}
        <StyledTextContainer>
          <StyledSnackbarText variant="body">{message}</StyledSnackbarText>
          {link && (
            <Link
              href={link.href}
              target="_blank"
              color="inherit"
              variant="body"
              underline="always"
              sx={{ fontWeight: 600 }}
            >
              {link.label}
            </Link>
          )}
        </StyledTextContainer>
        <StyledButtonContainer>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: dividerColor,
            }}
          />
          <StyledSnackbarButton title={"Close snackbar"} onClick={() => dismissSnackbar(id)}>
            {<X size={18} color={iconColor} />}
          </StyledSnackbarButton>
        </StyledButtonContainer>
      </StyledCard>
    </SnackbarContent>
  );
});
