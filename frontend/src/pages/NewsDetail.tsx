import {
  Box,
  Card,
  CardActionArea,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import { NEWS } from "../data/content";
import { BRAND } from "../theme";

/** Sidebar for news pages: search, categories, recent news — like the original site. */
export function NewsSidebar() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const categories = Object.entries(
    NEWS.reduce<Record<string, number>>((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {})
  );

  return (
    <Stack spacing={4}>
      <Paper
        component="form"
        variant="outlined"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/news-updates?q=${encodeURIComponent(q)}`);
        }}
        sx={{ display: "flex", px: 1.5, py: 0.5, alignItems: "center" }}
      >
        <InputBase
          placeholder="Search..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          sx={{ flex: 1 }}
        />
        <IconButton type="submit" aria-label="Search news">
          <SearchIcon />
        </IconButton>
      </Paper>

      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Categories
        </Typography>
        <Box sx={{ width: 32, height: 3, bgcolor: BRAND.primary, mb: 1.5 }} />
        <List disablePadding>
          {categories.map(([cat, count]) => (
            <ListItemButton
              key={cat}
              component={Link}
              to={`/news-updates?q=${encodeURIComponent(cat)}`}
              sx={{ px: 0.5 }}
            >
              <ChevronRightIcon sx={{ fontSize: 16, color: BRAND.primary, mr: 0.5 }} />
              <ListItemText primary={cat} />
              <Typography variant="body2" color="text.secondary">
                {count}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Recent News
        </Typography>
        <Box sx={{ width: 32, height: 3, bgcolor: BRAND.primary, mb: 1.5 }} />
        <Stack spacing={2}>
          {NEWS.slice(0, 4).map((p) => (
            <Card key={p.slug} elevation={0} sx={{ bgcolor: "transparent" }}>
              <CardActionArea
                component={Link}
                to={`/news-updates/${p.slug}`}
                sx={{ display: "flex", gap: 1.5, alignItems: "flex-start", justifyContent: "flex-start" }}
              >
                <Box
                  component="img"
                  src={p.img}
                  alt=""
                  sx={{ width: 64, height: 64, objectFit: "cover", borderRadius: "50%", flexShrink: 0 }}
                />
                <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.4 }}>
                  {p.title.length > 70 ? p.title.slice(0, 70) + "…" : p.title}
                </Typography>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}

export default function NewsDetail() {
  const { slug } = useParams();
  const post = NEWS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/news-updates" replace />;

  return (
    <Box>
      <PageBanner title={post.title} crumb={post.category} />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Reveal>
              <Box sx={{ position: "relative" }}>
                <Box component="img" src={post.img} alt="" sx={{ width: "100%", display: "block" }} />
                <Chip
                  label={post.category}
                  sx={{
                    position: "absolute",
                    right: 16,
                    bottom: 16,
                    bgcolor: BRAND.primary,
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Stack direction="row" spacing={2} sx={{ my: 2, alignItems: "center" }}>
                <Stack direction="row" spacing={0.6} sx={{ alignItems: "center" }}>
                  <CalendarMonthOutlinedIcon sx={{ fontSize: 16, color: BRAND.primary }} />
                  <Typography variant="body2" color="text.secondary">
                    {post.date}
                  </Typography>
                </Stack>
                <Divider orientation="vertical" flexItem />
                <Stack direction="row" spacing={0.6} sx={{ alignItems: "center" }}>
                  <PersonOutlineIcon sx={{ fontSize: 16, color: BRAND.primary }} />
                  <Typography variant="body2" color="text.secondary">
                    {post.author}
                  </Typography>
                </Stack>
              </Stack>
              <Box sx={{ width: 40, height: 3, bgcolor: BRAND.primary, mb: 3 }} />
              {post.body.map((t, i) => (
                <Typography key={i} sx={{ mb: 2.5 }}>
                  {t}
                </Typography>
              ))}
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <NewsSidebar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
