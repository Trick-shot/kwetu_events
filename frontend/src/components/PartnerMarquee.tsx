import { Box } from "@mui/material";
import { PARTNERS } from "../data/content";

/**
 * Continuously sliding partner-logo strip (left → right), like the original
 * site's carousel. Pure CSS: the list is rendered twice and translated by
 * half its own width, so the loop is seamless at any screen size.
 * Pauses on hover; logos are grayscale until hovered.
 */
export default function PartnerMarquee() {
  const strip = [...PARTNERS, ...PARTNERS];
  return (
    <Box sx={{ overflow: "hidden", py: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "max-content",
          animation: "gci-marquee 40s linear infinite",
          "&:hover": { animationPlayState: "paused" },
          "@keyframes gci-marquee": {
            from: { transform: "translateX(-50%)" },
            to: { transform: "translateX(0)" },
          },
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      >
        {strip.map((p, i) => (
          <Box
            key={`${p.name}-${i}`}
            component="img"
            src={p.img}
            alt={p.name}
            loading="lazy"
            sx={{
              height: 64,
              width: "auto",
              objectFit: "contain",
              filter: "grayscale(1)",
              opacity: 0.75,
              transition: "all .3s",
              "&:hover": { filter: "none", opacity: 1 },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
