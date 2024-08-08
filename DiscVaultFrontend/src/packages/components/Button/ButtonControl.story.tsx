/* eslint-disable no-console */
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@mui/material";
import { CheckCircle } from "phosphor-react";
import { ThemeProvider, theme } from "@/styles";
import React from "react";

const buttonOptions = ["primary", "primary-inverted", "secondary", "warning"] as const;
type ButtonOption = (typeof buttonOptions)[number];

export interface ButtonControlProps {
  disabled?: boolean;
  variant: ButtonOption;
  children?: React.ReactNode;
}

const meta: Meta = {
  title: "ButtonControl",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "primary-inverted", "secondary", "warning"],
      },
    },
  },
  args: {
    disabled: false,
    variant: "primary",
    children: "Button label",
  },
};

export default meta;

const Template: StoryFn<ButtonControlProps> = (args) => (
  <ThemeProvider theme={theme}>
    {(["primary", "primary-inverted", "secondary", "warning"] as ButtonOption[]).map((o) => (
      <Button {...args} variant={o} startIcon={<CheckCircle weight="fill" size={20} />} />
    ))}
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
