import { Outlet } from "react-router-dom";
import { Boundary } from "@/components";
import { MainContent } from "./DefaultLayout.styles";
import { Overlays } from "@/overlays";

export const DefaultLayout: React.FC = () => {
  return (
    <Boundary>
      <Boundary>
        <MainContent>
          <Boundary>
            <Outlet />
          </Boundary>
        </MainContent>
      </Boundary>
      <Overlays />
    </Boundary>
  );
};
