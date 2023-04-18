import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[300]
    },
    primary: {
      main: '#4a148c'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: '#b71c1c'
    }
  },
  components: {
    
  }
});