/* eslint-disable no-console */
import { Meta, StoryFn } from "@storybook/react";
import { Card, CardProps } from ".";
import { Typography } from "@mui/material";
import { ThemeProvider, theme } from "@/styles";

const meta: Meta = {
  title: "Card",
  component: Card,
  argTypes: {},
  args: {
    title: "Default",
    children: (
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum
      </Typography>
    ),
  },
};

export default meta;

const Template: StoryFn<CardProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Card {...args} />
    <Card {...args} onCancel={() => {}} />
    <Card {...args} variant="confirmation" onCancel={() => {}} onSubmit={() => {}} />
    <Card {...args} variant="warning" onCancel={() => {}} onSubmit={() => {}} submitText="Delete" />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
