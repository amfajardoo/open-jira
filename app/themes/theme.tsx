"use client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { lightTheme } from './light-theme';

const Theme = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Theme;