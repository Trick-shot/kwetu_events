import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ASSETS, NAV } from "../data/content";
import { BRAND } from "../theme";

/** White header; active item gets a navy block with a yellow underline. Shrinks when stuck. */
export default function Header() {
  const stuck = useScrollTrigger({ disableHysteresis: true, threshold: 80 });
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <AppBar
      position="sticky"
      elevation={stuck ? 4 : 0}
      sx={{ bgcolor: "#fff", color: "text.primary", transition: "all .3s" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: stuck ? 72 : 92, transition: "min-height .3s" }}>
          <Box component={Link} to="/" sx={{ display: "flex", mr: "auto" }}>
            <Box
              component="img"
              src={ASSETS.logo}
              alt="Kwetu Events International Initiative"
              sx={{ height: stuck ? 52 : 64, transition: "height .3s" }}
            />
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignSelf: "stretch" }}>
            {NAV.map((item) => {
              const active =
                item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
              return (
                <Box
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2.2,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    position: "relative",
                    color: active ? "#fff" : "text.primary",
                    bgcolor: active ? BRAND.navy : "transparent",
                    "&::after": active
                      ? {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          height: 3,
                          bgcolor: BRAND.yellow,
                        }
                      : undefined,
                    "&:hover": { color: active ? "#fff" : BRAND.navy },
                  }}
                >
                  {item.label}
                </Box>
              );
            })}
          </Box>

          <IconButton
            onClick={() => setOpen(true)}
            sx={{ ml: 1.5, display: { md: "none" } }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }} role="presentation">
          <List>
            {NAV.map((item) => (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 600 } } }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
