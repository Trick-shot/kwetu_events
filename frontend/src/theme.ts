import { createTheme } from "@mui/material/styles";

// GCI brand palette — logo-derived colours only (Green Conservation Initiative)
// Semantic names so the next rebrand is a value change, not a find-and-replace.
export const BRAND = {
  primary: "#80CD29", // GCI green
  secondary: "#3871C1", // GCI blue
  primaryDark: "#68A81F", // hover shade of GCI green
  ink: "#0E0E0E",
  body: "#555555",
  paper: "#FFFFFF",
  light: "#F5F6F8",
  dark: "#101014", // footer / dark bands
};

const HEADING = `"Barlow", "Roboto", "Helvetica", sans-serif`;

const theme = createTheme({
  palette: {
    primary: { main: BRAND.primary, contrastText: "#FFFFFF" },
    secondary: { main: BRAND.secondary, contrastText: "#FFFFFF" },
    text: { primary: BRAND.ink, secondary: BRAND.body },
    background: { default: BRAND.paper },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    // Headings in Barlow, like the original site; body/nav stay Roboto
    h1: { fontFamily: HEADING, fontWeight: 700, lineHeight: 1.15 },
    h2: { fontFamily: HEADING, fontWeight: 700, lineHeight: 1.2 },
    h3: { fontFamily: HEADING, fontWeight: 700 },
    h4: { fontFamily: HEADING, fontWeight: 700 },
    h5: { fontFamily: HEADING, fontWeight: 700 },
    h6: { fontFamily: HEADING, fontWeight: 600 },
    body1: { color: BRAND.body, lineHeight: 1.8 },
    body2: { color: BRAND.body, lineHeight: 1.8 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "#FFFFFF",
          padding: "12px 28px",
          boxShadow: "none",
          "&:hover": { backgroundColor: "#68A81F", boxShadow: "none" },
        },
      },
    },
  },
});

export default theme;
