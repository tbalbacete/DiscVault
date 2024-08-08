import { render, RenderOptions as RtlRenderOptions } from "@testing-library/react";
import user from "@testing-library/user-event";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { theme, ThemeProvider } from "@/styles";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

type RenderOptions = RtlRenderOptions;

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries">) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

// re-export everything
export * from "@testing-library/react";
export * from "jest-axe";
// override render method
export { customRender as render, user };
