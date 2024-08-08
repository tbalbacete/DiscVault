import * as React from "react";
import { StyledButtonRow, StyledContent, StyledCard, StyledTitleRow, StyledIconButton } from "./Card.styles";
import { Button, Typography } from "@mui/material";
import { CheckCircle, Trash, X } from "phosphor-react";
import { useTranslation } from "react-i18next";

const cardOptions = ["information", "confirmation", "warning"] as const;
type CardOption = (typeof cardOptions)[number];

export interface CardProps {
  title: string;
  variant?: CardOption;
  onCancel?: () => void;
  onSubmit?: () => void;
  submitText?: string;
  children?: React.ReactNode;
  titleMaxWidth?: number;
}

export const Card: React.FC<CardProps> = ({
  title,
  variant = "information",
  onCancel,
  onSubmit,
  submitText = "Submit",
  children,
  titleMaxWidth,
}) => {
  const [t] = useTranslation();

  const submitIcon = variant === "warning" ? <Trash weight="fill" /> : <CheckCircle weight="fill" />;
  const submitVariant = variant === "warning" ? "warning" : "primary-inverted";

  return (
    <StyledCard variant="outlined">
      <StyledTitleRow
        sx={{
          justifyContent: variant === "information" && !onCancel ? "center" : "default",
          maxWidth: titleMaxWidth ?? "default",
        }}
      >
        <Typography variant="h3">{title}</Typography>
        {variant === "information" && onCancel && (
          <StyledIconButton color="minimal" onClick={onCancel} title="Close button">
            <X size={32} />
          </StyledIconButton>
        )}
      </StyledTitleRow>
      <StyledContent>{children}</StyledContent>
      {(variant === "confirmation" || variant === "warning") && (
        <StyledButtonRow>
          <Button onClick={onCancel}>{t`card.cancel`}</Button>
          <Button type="submit" onClick={onSubmit} variant={submitVariant} startIcon={submitIcon}>
            {submitText}
          </Button>
        </StyledButtonRow>
      )}
    </StyledCard>
  );
};
