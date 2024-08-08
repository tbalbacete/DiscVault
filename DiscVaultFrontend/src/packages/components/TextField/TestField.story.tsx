/* eslint-disable no-console */
import { Meta, StoryFn } from "@storybook/react";
import { TextField, TextFieldProps } from ".";
import { ThemeProvider, theme } from "@/styles";

const meta: Meta = {
  title: "TextField",
  component: TextField,
  argTypes: { size: { control: { type: "select", options: ["small", "medium"] } } },
  args: {
    labelLeft: false,
    disabled: false,
    required: false,
    size: "medium",
    error: "",
    placeholder: "Placeholder text...",
    label: "LABEL HERE...",
    multiline: false,
    name: "test",
    minRows: 3,
    maxRows: 10,
  },
};

export default meta;

const Template: StoryFn<TextFieldProps> = (args) => (
  <ThemeProvider theme={theme}>
    <TextField {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
