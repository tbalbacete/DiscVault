import React from "react";
import { App } from "./app";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";
import { createRoot } from "react-dom/client";
import { Boundary } from "@/components";
import { CssBaseline, ThemeProvider, theme } from "@/styles";
import { SnackbarProvider } from "notistack";
import { Snackbar, PageSpinner } from "@/packages/components";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <React.Suspense fallback={<PageSpinner />}>
        <Boundary>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <I18nextProvider i18n={i18n}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <SnackbarProvider
                  Components={{ success: Snackbar, error: Snackbar }}
                  maxSnack={3}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  autoHideDuration={3000}
                >
                  <App />
                </SnackbarProvider>
              </ThemeProvider>
            </I18nextProvider>
          </LocalizationProvider>
        </Boundary>
      </React.Suspense>
    </React.StrictMode>
  );
};

const startApp = async () => {
  const container = document.getElementById("root");
  const root = createRoot(container!);
  root.render(<Root />);
};

startApp();
