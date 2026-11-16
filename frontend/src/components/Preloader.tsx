import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "../theme";

/** Full-screen yellow preloader with pulsing dots, shown briefly on first load. */
export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: BRAND.yellow,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ scale: [0.4, 1, 0.4] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "block",
                }}
              />
            ))}
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
