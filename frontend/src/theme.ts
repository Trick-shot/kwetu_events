import { createTheme } from "@mui/material/styles";

// KEI brand palette (from kei.or.tz / Figma)
export const BRAND = {
  yellow: "#F7C522",
  navy: "#001846",
  ink: "#0E0E0E",
  body: "#555555",
  paper: "#FFFFFF",
  light: "#F5F6F8",
};

const theme = createTheme({
  palette: {
    primary: { main: BRAND.yellow, contrastText: "#FFFFFF" },
    secondary: { main: BRAND.navy, contrastText: "#FFFFFF" },
    text: { primary: BRAND.ink, secondary: BRAND.body },
    background: { default: BRAND.paper },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 700, lineHeight: 1.15 },
    h2: { fontWeight: 700, lineHeight: 1.2 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
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
          "&:hover": { backgroundColor: "#e5b51a", boxShadow: "none" },
        },
      },
    },
  },
});

export default theme;
