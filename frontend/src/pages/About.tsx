import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { ABOUT, ASSETS, ENDORSEMENTS } from "../data/content";
import { BRAND } from "../theme";

function ArrowItem({ title, text }: { title?: string; text: string }) {
  return (
    <Stack direction="row" spacing={1.2} sx={{ mb: 2 }}>
      <ArrowForwardIcon sx={{ color: BRAND.primary, fontSize: 18, mt: 0.5, flexShrink: 0 }} />
      <Typography variant="body2">
        {title && (
          <Box component="strong" sx={{ color: "text.primary" }}>
            {title} :{" "}
          </Box>
        )}
        {text}
      </Typography>
    </Stack>
  );
}

export default function About() {
  return (
    <Box>
      <PageBanner title="About us" crumb="About Us" />

      {/* Intro */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <SectionHeading label="About us" title={ABOUT.title} />
              {ABOUT.paragraphs.map((t, i) => (
                <Typography key={i} sx={{ mb: 2.5 }}>
                  {t}
                </Typography>
              ))}
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={0.15}>
              <Box
                component="img"
                src={ASSETS.sdgStillLife}
                alt="Sustainable development"
                sx={{ width: "100%", display: "block" }}
              />
            </Reveal>
          </Grid>
        </Grid>

        {/* Our Name */}
        <Reveal>
          <Typography variant="h4" sx={{ fontSize: 26, mt: 8, mb: 3 }}>
            Our Name
          </Typography>
          {ABOUT.ourName.map((t, i) => (
            <Typography key={i} sx={{ mb: 2.5, maxWidth: 920 }}>
              {t}
            </Typography>
          ))}
        </Reveal>

        {/* Vision / Mission / Objectives / Values */}
        <Grid container columnSpacing={8} sx={{ mt: 6 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Typography variant="h4" sx={{ fontSize: 26, mb: 2 }}>
                Vision Statement
              </Typography>
              <Typography sx={{ mb: 5 }}>{ABOUT.vision}</Typography>
            </Reveal>
            <Reveal>
              <Typography variant="h4" sx={{ fontSize: 26, mb: 2 }}>
                Objectives
              </Typography>
              {ABOUT.objectives.map((o, i) => (
                <ArrowItem key={i} text={o} />
              ))}
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={0.1}>
              <Typography variant="h4" sx={{ fontSize: 26, mb: 2 }}>
                Mission Statement
              </Typography>
              <Typography sx={{ mb: 5 }}>{ABOUT.mission}</Typography>
            </Reveal>
            <Reveal delay={0.1}>
              <Typography variant="h4" sx={{ fontSize: 26, mb: 2 }}>
                Our Values
              </Typography>
              <Typography sx={{ mb: 3 }}>{ABOUT.valuesIntro}</Typography>
              {ABOUT.values.map((v) => (
                <ArrowItem key={v.name} title={`${v.letter} - ${v.name}`} text={v.text} />
              ))}
            </Reveal>
          </Grid>
        </Grid>

        {/* Endorsements CTA band */}
        <Reveal>
          <Paper
            elevation={0}
            sx={{
              bgcolor: BRAND.secondary,
              color: "#fff",
              mt: 8,
              px: { xs: 3, md: 5 },
              py: 3.5,
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: 18 }}>
              <strong>Want to know more about us?</strong>{" "}
              <Box component="span" sx={{ opacity: 0.85 }}>
                Download our Certificates and Endorsements
              </Box>
            </Typography>
            <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1.5 }}>
              {ENDORSEMENTS.map((e) => (
                <Button
                  key={e.file}
                  component="a"
                  href={e.file}
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  size="small"
                  startIcon={<CloudDownloadOutlinedIcon />}
                  sx={{ bgcolor: "#fff", color: "text.primary", "&:hover": { bgcolor: "#eee" } }}
                >
                  {e.label}
                </Button>
              ))}
            </Stack>
          </Paper>
        </Reveal>
      </Container>

      {/* Team */}
      <Box sx={{ bgcolor: BRAND.light, py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal>
                <SectionHeading title={ABOUT.teamTitle} />
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal delay={0.1}>
                <Typography>{ABOUT.teamBlurb}</Typography>
              </Reveal>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            {ABOUT.team.map((m, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={m.name}>
                <Reveal delay={(i % 3) * 0.12}>
                  <Card sx={{ position: "relative" }}>
                    <CardActionArea component={Link} to={`/team/${m.slug}`} aria-label={`View profile: ${m.name}`}>
                      <CardMedia
                        component="img"
                        image={m.img}
                        alt={m.name}
                        sx={{ aspectRatio: "267/352", objectFit: "cover" }}
                      />
                      <Paper
                        elevation={3}
                        sx={{ position: "absolute", left: 16, right: 16, bottom: 16, p: 1.5, textAlign: "center" }}
                      >
                        <Typography sx={{ fontWeight: 700 }}>{m.name}</Typography>
                        {m.role && (
                          <Typography variant="body2" color="text.secondary">
                            {m.role}
                          </Typography>
                        )}
                      </Paper>
                    </CardActionArea>
                  </Card>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
