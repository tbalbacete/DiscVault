/* eslint-disable no-console */
import { Meta, StoryFn } from "@storybook/react";
import { PageSpinner } from ".";

const meta: Meta = {
  title: "PageSpinner",
  component: PageSpinner,
  argTypes: {},
};

export default meta;

const Template: StoryFn = () => <PageSpinner />;

export const Default = Template.bind({});
Default.args = {};
