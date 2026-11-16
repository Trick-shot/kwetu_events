import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import { ASSETS, NAV, SITE } from "../data/content";
import { BRAND } from "../theme";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        color: "rgba(255,255,255,.8)",
        backgroundColor: "#101014",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box component="img" src={ASSETS.logoWhite} alt={SITE.short} sx={{ height: 56, mb: 2 }} />
            <Typography variant="body2" sx={{ color: "inherit", mb: 2 }}>
              {SITE.name}
              <br />
              {SITE.addressShort}
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                <PhoneIcon sx={{ fontSize: 16, color: BRAND.yellow }} />
                <Typography variant="body2" sx={{ color: "inherit" }}>
                  {SITE.phones[0]}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                <MailOutlineIcon sx={{ fontSize: 16, color: BRAND.yellow }} />
                <Typography variant="body2" sx={{ color: "inherit" }}>
                  {SITE.emails[0]}
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4.5 }}>
            <Typography variant="h6" sx={{ color: "#fff", mb: 3 }}>
              Links
            </Typography>
            <Grid container>
              {NAV.map((item) => (
                <Grid size={{ xs: 6 }} key={item.path} sx={{ mb: 1.5 }}>
                  <MuiLink
                    component={Link}
                    to={item.path}
                    underline="hover"
                    sx={{
                      color: "inherit",
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: 14,
                      "&:hover": { color: BRAND.yellow },
                    }}
                  >
                    <ChevronRightIcon sx={{ fontSize: 16, color: BRAND.yellow, mr: 0.5 }} />
                    {item.label}
                  </MuiLink>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 3.5 }}>
            <Typography variant="h6" sx={{ color: "#fff", mb: 3 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: "inherit", mb: 2 }}>
              Send us a newsletter to get update
            </Typography>
            <Stack direction="row" spacing={1}>
              {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    bgcolor: "rgba(255,255,255,.1)",
                    color: "#fff",
                    "&:hover": { bgcolor: BRAND.yellow },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ borderColor: "rgba(255,255,255,.1)" }} />
      <Typography variant="body2" align="center" sx={{ color: "rgba(255,255,255,.6)", py: 3 }}>
        {new Date().getFullYear()} © All rights reserved by {SITE.short}
      </Typography>
    </Box>
  );
}
