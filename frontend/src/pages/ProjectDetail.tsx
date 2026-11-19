import { useEffect, useState } from "react";
import { Box, Container, Grid, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, Navigate, useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import PdfDownloadBox from "../components/PdfDownloadBox";
import Reveal from "../components/Reveal";
import { PROJECTS, type Project } from "../data/content";
import { BRAND } from "../theme";

const HEADING_FONT = "Barlow, Roboto, sans-serif";
const BODY_SX = { fontSize: 15, lineHeight: "27px", color: "#383838", mb: 2.5 } as const;

/** Small label with a short line, then the H3 project title. */
function HeadingBlock({ project }: { project: Project }) {
  return (
    <Box sx={{ mb: { xs: 4, md: 5 } }}>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1.5 }}>
        <Box sx={{ width: 32, height: 3, bgcolor: BRAND.primary }} />
        <Typography sx={{ fontSize: 16, fontWeight: 600, color: "text.primary" }}>{project.label}</Typography>
      </Stack>
      <Typography
        component="h3"
        sx={{ fontFamily: HEADING_FONT, fontWeight: 700, fontSize: { xs: 28, md: 36 }, lineHeight: 1.2, color: "text.primary" }}
      >
        {project.heading}
      </Typography>
    </Box>
  );
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <Box
      component="img"
      src={project.image}
      alt={project.title}
      sx={{ width: "100%", display: "block", borderRadius: project.pdfs.length ? "7px 7px 0 0" : 0 }}
    />
  );
}

/** Intro, paragraphs and arrow list — shared by both layouts. */
function ProjectText({ project }: { project: Project }) {
  return (
    <>
      {project.intro && <Typography sx={BODY_SX}>{project.intro}</Typography>}
      {project.body.map((t, i) => (
        <Typography key={i} sx={BODY_SX}>
          {t}
        </Typography>
      ))}
      {project.bullets && (
        <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
          {project.bullets.map((b, i) => (
            <Stack component="li" direction="row" spacing={1.2} key={i} sx={{ mb: 1.5 }}>
              <ArrowForwardIcon sx={{ color: BRAND.secondary, fontSize: 16, mt: "7px", flexShrink: 0 }} />
              <Typography sx={{ fontSize: 16, lineHeight: "30px", color: "#383838" }}>{b}</Typography>
            </Stack>
          ))}
        </Box>
      )}
    </>
  );
}

/** Optional photo row under the content (projects with extra images from their documents). */
function Gallery({ project }: { project: Project }) {
  if (!project.gallery?.length) return null;
  return (
    <Box
      sx={{
        mt: { xs: 5, md: 7 },
        display: "grid",
        gap: "20px",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
      }}
    >
      {project.gallery.map((src) => (
        <Reveal key={src}>
          <Box
            component="img"
            src={src}
            alt={`${project.title} photo`}
            loading="lazy"
            sx={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", display: "block", borderRadius: "5px" }}
          />
        </Reveal>
      ))}
    </Box>
  );
}

/** Default layout: image left, text right. */
function StandardLayout({ project }: { project: Project }) {
  return (
    <Grid container spacing={{ xs: 4, md: 8 }}>
      <Grid size={{ xs: 12, md: 7 }}>
        {/* Photo + downloads stay in view while long text scrolls (desktop) */}
        <Box sx={{ position: { md: "sticky" }, top: { md: 110 } }}>
          <Reveal>
            <ProjectImage project={project} />
            <PdfDownloadBox pdfs={project.pdfs} />
          </Reveal>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Reveal delay={0.1}>
          <ProjectText project={project} />
        </Reveal>
      </Grid>
    </Grid>
  );
}

/** JOWED layout: intro + arrow list on the left (~1/3), image + download boxes on the right (~2/3). */
function ListLayout({ project }: { project: Project }) {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }}>
      {/* Image column first on mobile */}
      <Grid size={{ xs: 12, md: 8 }} sx={{ order: { xs: 1, md: 2 } }}>
        <Reveal delay={0.1}>
          <ProjectImage project={project} />
          <PdfDownloadBox pdfs={project.pdfs} />
        </Reveal>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 2, md: 1 } }}>
        <Reveal>
          <ProjectText project={project} />
        </Reveal>
      </Grid>
    </Grid>
  );
}

/** Related projects carousel: 3 visible on desktop, round white arrows, title on hover. */
function RelatedCarousel({ current }: { current: string }) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const perView = isMd ? 3 : isSm ? 2 : 1;
  const items = PROJECTS.filter((p) => p.slug !== current);
  const maxStart = Math.max(0, items.length - perView);
  const [start, setStart] = useState(0);

  useEffect(() => setStart(0), [current, perView]);

  const go = (dir: number) => setStart((s) => (s + dir < 0 ? maxStart : s + dir > maxStart ? 0 : s + dir));

  const arrowSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    width: 44,
    height: 44,
    bgcolor: "#fff",
    color: BRAND.ink,
    boxShadow: 3,
    "&:hover": { bgcolor: "#fff", color: BRAND.primary },
  } as const;

  return (
    <Box sx={{ position: "relative", mt: { xs: 7, md: 9 }, px: { xs: 0, sm: 7 } }}>
      <IconButton aria-label="Previous projects" onClick={() => go(-1)} sx={{ ...arrowSx, left: { xs: 4, sm: 0 } }}>
        <ChevronLeftIcon />
      </IconButton>
      <Box sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            transition: "transform .5s ease",
            transform: `translateX(-${(start * 100) / perView}%)`,
          }}
        >
          {items.map((p) => (
            <Box key={p.slug} sx={{ flex: `0 0 ${100 / perView}%`, px: 1.25, boxSizing: "border-box" }}>
              <Box
                component={Link}
                to={`/portfolio/${p.slug}`}
                aria-label={p.title}
                sx={{
                  position: "relative",
                  display: "block",
                  overflow: "hidden",
                  borderRadius: "5px",
                  aspectRatio: "310 / 304",
                  "& .shade, & .title": { transition: "opacity .35s ease, transform .35s ease" },
                  "&:hover .shade, &:focus-visible .shade": { opacity: 1 },
                  "&:hover .title, &:focus-visible .title": { opacity: 1, transform: "translateY(0)" },
                }}
              >
                <Box
                  component="img"
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <Box
                  className="shade"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.1) 60%)",
                  }}
                />
                <Typography
                  className="title"
                  sx={{
                    position: "absolute",
                    left: 20,
                    right: 20,
                    bottom: 18,
                    color: "#fff",
                    fontFamily: HEADING_FONT,
                    fontWeight: 700,
                    fontSize: 18,
                    lineHeight: 1.3,
                    opacity: 0,
                    transform: "translateY(10px)",
                  }}
                >
                  {p.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <IconButton aria-label="Next projects" onClick={() => go(1)} sx={{ ...arrowSx, right: { xs: 4, sm: 0 } }}>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <Box>
      <PageBanner title={project.title} crumb={project.title} trail={[{ label: "Portfolio", to: "/projects" }]} />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        <Reveal>
          <HeadingBlock project={project} />
        </Reveal>
        {project.layout === "list" ? <ListLayout project={project} /> : <StandardLayout project={project} />}
        <Gallery project={project} />
        <RelatedCarousel current={project.slug} />
      </Container>
    </Box>
  );
}
