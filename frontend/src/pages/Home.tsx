import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { ASSETS, HOME, PARTNERS } from "../data/content";
import { BRAND } from "../theme";

const involveIcons = [
  GroupsOutlinedIcon,
  VolunteerActivismOutlinedIcon,
  HandshakeOutlinedIcon,
  CampaignOutlinedIcon,
];

export default function Home() {
  return (
    <Box>
      {/* Hero — slow Ken Burns zoom on the background, staggered text entrance */}
      <Box sx={{ position: "relative", overflow: "hidden", color: "#fff" }}>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${ASSETS.heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", pt: { xs: 12, md: 18 }, pb: { xs: 20, md: 26 } }}>
          <Grid container>
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 42, md: 52 }, mb: 2.5 }}>
                  {HOME.hero.title}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Typography sx={{ fontSize: { xs: 16, md: 19 }, color: "rgba(255,255,255,.92)", mb: 4 }}>
                  {HOME.hero.subtitle}
                </Typography>
                <Button
                  component={Link}
                  to="/what-we-do"
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon sx={{ fontSize: 13 }} />}
                >
                  {HOME.hero.cta}
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pillars card overlapping the hero */}
      <Container maxWidth="lg" sx={{ mt: { xs: -12, md: -16 }, position: "relative" }}>
        <Reveal y={60}>
          <Paper elevation={6} sx={{ p: { xs: 3, md: 5 } }}>
            <Grid container spacing={4}>
              {HOME.pillars.map((p) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={p.title}>
                  <Typography variant="h6" sx={{ mb: 1.5 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2">{p.text}</Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Reveal>
      </Container>

      {/* About */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <SectionHeading label={HOME.about.label} title={HOME.about.title} />
              {HOME.about.paragraphs.map((t, i) => (
                <Typography key={i} sx={{ mb: 2.5 }}>
                  {t}
                </Typography>
              ))}
              <Button
                component={Link}
                to="/about-us"
                variant="contained"
                endIcon={<ArrowForwardIosIcon sx={{ fontSize: 13 }} />}
              >
                Read More
              </Button>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={0.15}>
              <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Box
                    component="img"
                    src={ASSETS.saveTheWorld}
                    alt="Save the world illustration"
                    sx={{ width: "100%", maxWidth: 420, display: "block" }}
                  />
                </Paper>
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 0, md: -24 },
                    top: "35%",
                    bgcolor: BRAND.navy,
                    color: "#fff",
                    px: 1.5,
                    py: 3,
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}
                >
                  {HOME.about.yearsBadge}
                </Box>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>

      {/* Get involved */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.94), rgba(255,255,255,.94)), url(${ASSETS.kids})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 11 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            {HOME.involvement.map((item, i) => {
              const Icon = involveIcons[i];
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
                  <Reveal delay={i * 0.12}>
                    <Box sx={{ textAlign: "center" }}>
                      <Icon sx={{ fontSize: 48, color: BRAND.yellow, mb: 1.5 }} />
                      <Typography variant="h6" sx={{ mb: 1.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2">{item.text}</Typography>
                    </Box>
                  </Reveal>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Partners & Donors */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 }, textAlign: "center" }}>
        <Reveal>
          <Typography variant="h3" sx={{ fontSize: { xs: 28, md: 38 }, mb: 2 }}>
            Our Partners & Donors
          </Typography>
          <Typography sx={{ maxWidth: 760, mx: "auto", mb: 6 }}>{HOME.partnersBlurb}</Typography>
        </Reveal>
        <Grid container spacing={4} sx={{ justifyContent: "center", alignItems: "center" }}>
          {PARTNERS.map((p, i) => (
            <Grid size={{ xs: 4, sm: 3, md: 2 }} key={p.name}>
              <Reveal delay={(i % 6) * 0.08}>
                <Card
                  elevation={0}
                  sx={{
                    p: 1,
                    display: "flex",
                    justifyContent: "center",
                    filter: "grayscale(1)",
                    opacity: 0.75,
                    transition: "all .3s",
                    "&:hover": { filter: "none", opacity: 1 },
                  }}
                >
                  <Box
                    component="img"
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    sx={{ maxHeight: 72, maxWidth: "100%", objectFit: "contain" }}
                  />
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
