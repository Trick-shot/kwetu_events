import { Box, Card, CardActionArea, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { PROJECTS, PROJECTS_PAGE } from "../data/content";

export default function Projects() {
  return (
    <Box>
      <PageBanner title="Projects" crumb="Projects" />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        <Grid container spacing={5} sx={{ alignItems: "flex-end", mb: 5 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <SectionHeading label="Projects" title={PROJECTS_PAGE.title} />
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={0.1}>
              <Typography>{PROJECTS_PAGE.blurb}</Typography>
            </Reveal>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {PROJECTS.map((p, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.slug}>
              <Reveal delay={(i % 3) * 0.12}>
                <Card>
                  <CardActionArea component={Link} to={`/projects/${p.slug}`}>
                    <CardMedia
                      component="img"
                      image={p.img}
                      alt={p.title}
                      sx={{
                        aspectRatio: "600/332",
                        objectFit: "cover",
                        transition: "transform .4s",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                    <Typography variant="h6" sx={{ p: 2 }}>
                      {p.title}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
