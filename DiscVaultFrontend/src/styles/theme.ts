import { createTheme } from "@mui/material/styles";
import { palette } from "./theme/palette";
import { typography } from "./theme/typography";
import {
  MuiButtonBase,
  MuiButton,
  MuiChip,
  MuiIconButton,
  MuiInputBase,
  MuiLink,
  MuiSwitch,
} from "./MuiComponentDefaults";
import { breakpoints } from "./theme/breakpoints";

const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components: {
    MuiButtonBase,
    MuiButton,
    MuiChip,
    MuiIconButton,
    MuiInputBase,
    MuiLink,
    MuiSwitch,
  },
});

export default theme;
