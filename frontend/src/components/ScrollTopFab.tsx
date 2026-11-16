import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollTopFab() {
  const visible = useScrollTrigger({ disableHysteresis: true, threshold: 300 });
  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="medium"
        aria-label="Scroll back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        sx={{ position: "fixed", bottom: 28, right: 28, color: "#fff", zIndex: 1200 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
