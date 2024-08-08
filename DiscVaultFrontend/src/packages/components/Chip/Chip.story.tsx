/* eslint-disable no-console */
import { Meta, StoryFn } from "@storybook/react";
import { Chip, ChipProps } from ".";
import { ThemeProvider, theme } from "@/styles";

const meta: Meta = {
  title: "Chip",
  component: Chip,
  argTypes: {},
  args: {
    title: "Chip title",
    variant: "green",
    icon: false,
  },
};

export default meta;

const Template: StoryFn<ChipProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Chip {...args} />
    <Chip {...args} variant="red" />
    <Chip {...args} icon={true} />
    <Chip {...args} variant="red" icon={true} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
