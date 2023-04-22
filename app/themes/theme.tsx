"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from './light-theme';
import { Box } from '@mui/material';
import { Navbar, Sidebar } from "../components/ui";
import { darkTheme } from "./dark-theme";
import { UIProvider } from "../context/ui";


const Theme = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ padding: '1rem 1.5rem' }}>
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </UIProvider>
  );
}

export default Theme;