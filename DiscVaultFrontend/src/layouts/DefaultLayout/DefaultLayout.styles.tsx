import { Box, styled } from "@mui/material";
import { NAV_BAR_HEIGHT } from "@/constants";

export const MainContent = styled(Box)({
  position: "fixed",
  height: `calc(100vh - ${NAV_BAR_HEIGHT}px)`,
  flexGrow: 1,
  top: NAV_BAR_HEIGHT,
  backgroundSize: "40%",
  backgroundRepeat: "repeat",
  width: "100vw",
  overflow: "hidden",
});
