import { Box, Container, Grid, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import { PROJECTS, PROJECTS_PAGE, type Project } from "../data/content";
import { BRAND } from "../theme";

const HEADING_FONT = "Barlow, Roboto, sans-serif";

/** Image-only card; on hover: blue overlay, round link icon, green title bar (original site's portfolio card). */
function ProjectCard({ project }: { project: Project }) {
  return (
    <Box
      component={Link}
      to={`/portfolio/${project.slug}`}
      aria-label={project.title}
      sx={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        aspectRatio: "370 / 204",
        "& .overlay, & .bar, & .icon": { transition: "all .35s ease" },
        "&:hover .overlay, &:focus-visible .overlay": { opacity: 0.75 },
        "&:hover .bar, &:focus-visible .bar": { transform: "translateY(0)" },
        "&:hover .icon, &:focus-visible .icon": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
      }}
    >
      <Box
        component="img"
        src={project.img}
        alt={project.title}
        loading="lazy"
        sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <Box className="overlay" sx={{ position: "absolute", inset: 0, bgcolor: BRAND.secondary, opacity: 0 }} />
      <Box
        className="icon"
        sx={{
          position: "absolute",
          top: "36%",
          left: "50%",
          width: 36,
          height: 36,
          borderRadius: "50%",
          bgcolor: BRAND.primary,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transform: "translate(-50%, -50%) scale(.6)",
        }}
      >
        <LinkIcon sx={{ fontSize: 20 }} />
      </Box>
      <Box
        className="bar"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: BRAND.primary,
          color: "#fff",
          fontFamily: HEADING_FONT,
          fontWeight: 700,
          fontSize: 16,
          textAlign: "center",
          px: 2,
          py: 1.6,
          transform: "translateY(100%)",
        }}
      >
        {project.title}
      </Box>
    </Box>
  );
}

export default function Projects() {
  return (
    <Box>
      <PageBanner title="Projects" crumb="Projects" image={PROJECTS_PAGE.banner} />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        {/* Intro row */}
        <Grid container spacing={{ xs: 3, md: 6 }} sx={{ mb: { xs: 5, md: 7 } }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2.5 }}>
                <Box sx={{ width: 36, height: 3, bgcolor: BRAND.primary, mt: 2.5, flexShrink: 0 }} />
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 700,
                    fontSize: { xs: 28, md: 36 },
                    lineHeight: { xs: "36px", md: "44px" },
                    color: "text.primary",
                  }}
                >
                  {PROJECTS_PAGE.title}
                </Typography>
              </Box>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={0.1}>
              <Typography sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: { xs: "30px", md: "34px" }, color: BRAND.ink }}>
                {PROJECTS_PAGE.blurb}
              </Typography>
            </Reveal>
          </Grid>
        </Grid>

        {/* 3 x 2 grid */}
        <Box
          sx={{
            display: "grid",
            gap: "30px",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          }}
        >
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
