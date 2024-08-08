/* eslint-disable no-console */
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Boundary } from "@/components";
import { DataProvider } from "@/data/utils";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//Error Logging Client
// initDataDog();

export const App: React.FC = () => {
  return (
    <Boundary>
      <DataProvider>
        <Router>
          <AppRouter />
        </Router>
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </DataProvider>
    </Boundary>
  );
};
