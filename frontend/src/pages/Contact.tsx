import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import { CONTACT, SITE } from "../data/content";
import { BRAND } from "../theme";

const darkField = {
  "& .MuiInputBase-root": { bgcolor: "rgba(255,255,255,.08)", color: "#fff" },
  "& .MuiInputBase-input::placeholder": { color: "rgba(255,255,255,.6)", opacity: 1 },
  "& fieldset": { borderColor: "rgba(255,255,255,.25)" },
  "&:hover fieldset": { borderColor: "rgba(255,255,255,.5) !important" },
};

function InfoBox({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <Stack direction="row" spacing={2.5} sx={{ mb: 4 }}>
      <Paper
        elevation={0}
        sx={{
          width: 52,
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(255,255,255,.1)",
          color: "#fff",
          flexShrink: 0,
        }}
      >
        {icon}
      </Paper>
      <Box>
        <Typography variant="h6" sx={{ color: "#fff", mb: 0.5 }}>
          {title}
        </Typography>
        {lines.map((l) => (
          <Typography key={l} variant="body2" sx={{ color: "rgba(255,255,255,.75)" }}>
            {l}
          </Typography>
        ))}
      </Box>
    </Stack>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Box>
      <PageBanner title="Contact" crumb="Contact Us" />
      <Box
        sx={{
          backgroundColor: "#121216",
          py: { xs: 8, md: 11 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1.5 }}>
                  <Box sx={{ width: 32, height: 3, bgcolor: BRAND.yellow }} />
                </Stack>
                <Typography variant="h3" sx={{ color: "#fff", fontSize: { xs: 28, md: 34 }, mb: 5 }}>
                  Get in touch for any kind of help and informations
                </Typography>
                <InfoBox
                  icon={<PlaceOutlinedIcon />}
                  title="Our head office address:"
                  lines={[SITE.address]}
                />
                <InfoBox icon={<PhoneOutlinedIcon />} title="Call for help:" lines={SITE.phones} />
                <InfoBox
                  icon={<MailOutlineIcon />}
                  title="Mail us for information"
                  lines={SITE.emails}
                />
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal delay={0.15}>
                <Typography sx={{ color: "rgba(255,255,255,.85)", mb: 3 }}>
                  {CONTACT.blurb}
                </Typography>
                <Box
                  component="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true); // Phase 2: POST to the Django contact endpoint
                  }}
                >
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required placeholder="First name *" sx={darkField} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required placeholder="Last name *" sx={darkField} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required type="email" placeholder="Your mail *" sx={darkField} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required placeholder="Phone number *" sx={darkField} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required placeholder="Organization/Company *" sx={darkField} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField select fullWidth defaultValue="" sx={darkField} slotProps={{ select: { displayEmpty: true } }}>
                        <MenuItem value="" disabled>
                          Subject
                        </MenuItem>
                        {CONTACT.subjects.map((s) => (
                          <MenuItem key={s} value={s}>
                            {s}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth required multiline minRows={5} placeholder="Message..." sx={darkField} />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button type="submit" fullWidth variant="contained" size="large" startIcon={<SendIcon />}>
                        Send now
                      </Button>
                      {sent && (
                        <Typography sx={{ color: BRAND.yellow, mt: 2 }}>
                          Thank you! Your message has been received. (Form delivery goes live with the
                          backend in phase 2.)
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
