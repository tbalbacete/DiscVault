// import { theme, ThemeProvider } from "@/styles";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const withCssBaseline = (Story: any, context: any) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <Story {...context} />
      {/* </ThemeProvider> */}
    </LocalizationProvider>
  );
};
export default withCssBaseline;
