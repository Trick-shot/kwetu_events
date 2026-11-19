import { useEffect } from "react";
import { Box } from "@mui/material";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTopFab from "./components/ScrollTopFab";
import Home from "./pages/Home";
import About from "./pages/About";
import TeamDetail from "./pages/TeamDetail";
import WhatWeDo from "./pages/WhatWeDo";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";

function LegacyProjectRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/portfolio/${slug}`} replace />;
}

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Preloader />
      <ScrollToTopOnNavigate />
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/team/:slug" element={<TeamDetail />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/projects/:slug" element={<LegacyProjectRedirect />} />
          <Route path="/news-updates" element={<News />} />
          <Route path="/news-updates/:slug" element={<NewsDetail />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>
      <Footer />
      <ScrollTopFab />
    </Box>
  );
}
