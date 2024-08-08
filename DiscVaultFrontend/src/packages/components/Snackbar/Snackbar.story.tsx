/* eslint-disable no-console */
import { Meta, StoryFn } from "@storybook/react";
import { Snackbar, SnackbarProps } from ".";
import { ThemeProvider, theme } from "@/styles";

const meta: Meta = {
  title: "Snackbar",
  component: Snackbar,
  argTypes: {},
  args: {
    message: "Snackbar message",
    id: -1,
    variant: "success",
  },
};

export default meta;

const Template: StoryFn<SnackbarProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Snackbar {...args} />
    <Snackbar {...args} variant="error" />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
