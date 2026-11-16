import { Box, Breadcrumbs, Container, Link as MuiLink, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ASSETS } from "../data/content";

interface PageBannerProps {
  title: string;
  crumb: string;
  image?: string;
}

/** Inner-page banner: photo background, dark overlay, centered title + breadcrumb. */
export default function PageBanner({ title, crumb, image = ASSETS.banner }: PageBannerProps) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 9, md: 13 },
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 44 } }}>
            {title}
          </Typography>
          <Breadcrumbs
            separator="-"
            sx={{ justifyContent: "center", display: "inline-flex", color: "rgba(255,255,255,.85)", mt: 1 }}
          >
            <MuiLink component={Link} to="/" underline="hover" sx={{ color: "inherit", fontSize: 14 }}>
              Home
            </MuiLink>
            <Typography sx={{ fontSize: 14, color: "inherit" }}>{crumb}</Typography>
          </Breadcrumbs>
        </motion.div>
      </Container>
    </Box>
  );
}
