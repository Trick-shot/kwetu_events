import { Box, Stack, Typography } from "@mui/material";
import { BRAND } from "../theme";

interface SectionHeadingProps {
  label?: string;
  title: string;
  center?: boolean;
  light?: boolean;
}

/** Yellow dash + small label above a bold section title (site-wide pattern). */
export default function SectionHeading({ label, title, center, light }: SectionHeadingProps) {
  return (
    <Box sx={{ textAlign: center ? "center" : "left", mb: 3 }}>
      {label && (
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            mb: 1.5,
            alignItems: "center",
            justifyContent: center ? "center" : "flex-start",
          }}
        >
          <Box sx={{ width: 32, height: 3, bgcolor: BRAND.yellow }} />
          <Typography sx={{ fontSize: 14, color: light ? "rgba(255,255,255,.85)" : "text.secondary" }}>
            {label}
          </Typography>
        </Stack>
      )}
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: 28, md: 36 }, color: light ? "#fff" : "text.primary" }}
      >
        {title}
      </Typography>
    </Box>
  );
}
