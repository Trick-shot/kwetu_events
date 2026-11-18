import { Box, Container, Grid, Typography } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import { ABOUT } from "../data/content";
import { BRAND } from "../theme";

/** Team member detail — same layout as the original site: photo left, bio right. */
export default function TeamDetail() {
  const { slug } = useParams();
  const member = ABOUT.team.find((m) => m.slug === slug);
  if (!member) return <Navigate to="/about-us" replace />;

  return (
    <Box>
      <PageBanner title={member.name} crumb={member.name} />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        <Reveal>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, sm: 5, md: 3 }}>
              <Box
                component="img"
                src={member.img}
                alt={member.name}
                sx={{ width: "100%", display: "block", boxShadow: 3 }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 7, md: 9 }}>
              <Typography variant="h4" sx={{ fontSize: 28, mb: 0.5 }}>
                {member.name}
              </Typography>
              <Typography sx={{ color: BRAND.primary, fontWeight: 600, mb: 3 }}>
                {member.role}
              </Typography>
              <Typography sx={{ maxWidth: 760 }}>{member.bio}</Typography>
            </Grid>
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
}
