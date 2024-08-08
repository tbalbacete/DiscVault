import { axe, render } from "../test-utils/testing-library";
import { composeStories } from "@storybook/react";
import * as stories from "./PageSpinner.story";
const { Default } = composeStories(stories);

describe("PageSpinner", () => {
  test("renders without a11y violations", async () => {
    const { container } = render(<Default />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
