import { Box, Container, Stack, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import { Navigate, useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import { NEWS } from "../data/content";

export default function NewsDetail() {
  const { slug } = useParams();
  const post = NEWS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/news-updates" replace />;

  return (
    <Box>
      <PageBanner title="News & Updates" crumb={post.title.slice(0, 40) + "…"} />
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 11 } }}>
        <Reveal>
          <Typography variant="h3" sx={{ fontSize: { xs: 26, md: 34 }, mb: 2 }}>
            {post.title}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <Stack direction="row" spacing={0.6} sx={{ alignItems: "center" }}>
              <CalendarMonthOutlinedIcon sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {post.date}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.6} sx={{ alignItems: "center" }}>
              <PersonOutlineIcon sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {post.author}
              </Typography>
            </Stack>
          </Stack>
          <Box component="img" src={post.img} alt="" sx={{ width: "100%", mb: 4 }} />
          {post.body.map((t, i) => (
            <Typography key={i} sx={{ mb: 2.5 }}>
              {t}
            </Typography>
          ))}
        </Reveal>
      </Container>
    </Box>
  );
}
