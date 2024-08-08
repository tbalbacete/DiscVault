/* eslint-disable no-console */
import { Meta, StoryFn } from "@storybook/react";
import { Switch, SwitchProps } from ".";
import { ThemeProvider, theme } from "@/styles";

const meta: Meta = {
  title: "Switch",
  component: Switch,
  argTypes: {},
  args: {
    disabled: false,
    label: "LABEL",
    labelPlacement: "top",
    error: "",
    onBlur: (e: FocusEvent) => console.log("blur", e),
  },
};

export default meta;

const Template: StoryFn<SwitchProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Switch {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
