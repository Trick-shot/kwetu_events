import { Box, Container, Grid, Typography } from "@mui/material";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { WHAT_WE_DO } from "../data/content";

export default function WhatWeDo() {
  const half = Math.ceil(WHAT_WE_DO.paragraphs.length / 2);
  const cols = [WHAT_WE_DO.paragraphs.slice(0, half), WHAT_WE_DO.paragraphs.slice(half)];

  return (
    <Box>
      <PageBanner title="What We Do" crumb="What We Do" />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        <Reveal>
          <SectionHeading label="What we do" title={WHAT_WE_DO.title} />
        </Reveal>
        <Grid container columnSpacing={8} sx={{ mt: 2 }}>
          {cols.map((col, c) => (
            <Grid size={{ xs: 12, md: 6 }} key={c}>
              <Reveal delay={c * 0.12}>
                {col.map((t, i) => (
                  <Typography key={i} sx={{ mb: 2.5 }}>
                    {t}
                  </Typography>
                ))}
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
