import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import { Link, useSearchParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { NEWS, NEWS_PAGE } from "../data/content";

export default function News() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();
  const posts = q
    ? NEWS.filter(
        (p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      )
    : NEWS;
  return (
    <Box>
      <PageBanner title="News & Updates" crumb="News & Updates" />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
        <Grid container spacing={5} sx={{ alignItems: "flex-end", mb: 5 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <SectionHeading label="News & Updates" title={NEWS_PAGE.title} />
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={0.1}>
              <Typography>{NEWS_PAGE.blurb}</Typography>
            </Reveal>
          </Grid>
        </Grid>
        {q && (
          <Typography sx={{ mb: 3 }} color="text.secondary">
            {posts.length} result{posts.length === 1 ? "" : "s"} for "{params.get("q")}" —{" "}
            <Box component={Link} to="/news-updates" sx={{ color: "secondary.main" }}>
              clear
            </Box>
          </Typography>
        )}
        <Grid container spacing={4}>
          {posts.map((post, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.slug}>
              <Reveal delay={(i % 3) * 0.12}>
                <Card elevation={0} sx={{ overflow: "visible", bgcolor: "transparent" }}>
                  <CardActionArea component={Link} to={`/news-updates/${post.slug}`}>
                    <CardMedia
                      component="img"
                      image={post.img}
                      alt={post.title}
                      sx={{ aspectRatio: "16/10", objectFit: "cover" }}
                    />
                    <Paper elevation={4} sx={{ mx: 2, mt: -5, position: "relative", p: 2.5 }}>
                      <Stack direction="row" spacing={2} sx={{ mb: 1.5 }}>
                        <Stack direction="row" spacing={0.6} sx={{ alignItems: "center" }}>
                          <CalendarMonthOutlinedIcon sx={{ fontSize: 15, color: "text.secondary" }} />
                          <Typography variant="caption" color="text.secondary">
                            {post.date}
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.6} sx={{ alignItems: "center" }}>
                          <PersonOutlineIcon sx={{ fontSize: 15, color: "text.secondary" }} />
                          <Typography variant="caption" color="text.secondary">
                            {post.author}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography variant="h6" sx={{ fontSize: 17, lineHeight: 1.4 }}>
                        {post.title}
                      </Typography>
                    </Paper>
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
