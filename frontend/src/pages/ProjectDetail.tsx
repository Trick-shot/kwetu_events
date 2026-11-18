import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { Link, Navigate, useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { PROJECTS } from "../data/content";
import { BRAND } from "../theme";

export default function ProjectDetail() {
  const { slug } = useParams();
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Navigate to="/projects" replace />;
  const project = PROJECTS[idx];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const related = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <Box>
      <PageBanner title={project.title} crumb={project.title} />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        <Reveal>
          <SectionHeading label="Projects" title={project.title} />
          <Box
            component="img"
            src={project.img}
            alt={project.title}
            sx={{ width: "100%", maxWidth: 900, display: "block", mb: 4, boxShadow: 2 }}
          />
          {project.intro && <Typography sx={{ mb: 2.5 }}>{project.intro}</Typography>}
          {project.body.map((t, i) => (
            <Typography key={i} sx={{ mb: 2.5 }}>
              {t}
            </Typography>
          ))}
          {project.bullets && (
            <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
              {project.bullets.map((b, i) => (
                <Stack component="li" direction="row" spacing={1.2} key={i} sx={{ mb: 1.5 }}>
                  <ArrowForwardIcon sx={{ color: BRAND.primary, fontSize: 18, mt: 0.5, flexShrink: 0 }} />
                  <Typography variant="body2">{b}</Typography>
                </Stack>
              ))}
            </Box>
          )}
          {project.pdf && (
            <Button
              component="a"
              href={project.pdf}
              target="_blank"
              rel="noopener"
              variant="contained"
              startIcon={<PictureAsPdfOutlinedIcon />}
              sx={{ mt: 3 }}
            >
              Download PDF
            </Button>
          )}
        </Reveal>

        {/* Prev / Next */}
        <Stack direction="row" sx={{ justifyContent: "space-between", mt: 8, mb: 6 }}>
          <Button component={Link} to={`/projects/${prev.slug}`} startIcon={<ArrowBackIcon />}>
            Previous
          </Button>
          <Button component={Link} to={`/projects/${next.slug}`} endIcon={<ArrowForwardIcon />}>
            Next
          </Button>
        </Stack>

        {/* Related */}
        <Typography variant="h5" sx={{ mb: 3 }}>
          More Projects
        </Typography>
        <Grid container spacing={4}>
          {related.map((p) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.slug}>
              <Card>
                <CardActionArea component={Link} to={`/projects/${p.slug}`}>
                  <CardMedia
                    component="img"
                    image={p.img}
                    alt={p.title}
                    sx={{ aspectRatio: "600/332", objectFit: "cover" }}
                  />
                  <Typography variant="h6" sx={{ p: 2, fontSize: 16 }}>
                    {p.title}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
