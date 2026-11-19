import { Box, Button, Stack, Typography } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import type { ProjectPdf } from "../data/content";
import { BRAND } from "../theme";

/**
 * Stack of PDF download boxes (one per document) shown under a project image.
 * Renders nothing when the project has no documents.
 */
export default function PdfDownloadBox({ pdfs, attached = true }: { pdfs: ProjectPdf[]; attached?: boolean }) {
  if (!pdfs.length) return null;
  return (
    <Stack spacing={2}>
      {pdfs.map((pdf, i) => (
        <Box
          key={pdf.file}
          sx={{
            bgcolor: BRAND.secondary,
            borderRadius: attached && i === 0 ? "0 0 7px 7px" : "7px",
            px: { xs: 3, md: 5.5 },
            py: { xs: 3, md: 3.5 },
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Barlow, Roboto, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              lineHeight: 1.3,
              mb: 2.5,
            }}
          >
            {pdf.title}
          </Typography>
          <Button
            component="a"
            href={pdf.file}
            target="_blank"
            rel="noopener"
            startIcon={<CloudDownloadIcon />}
            sx={{
              bgcolor: "#fff",
              color: BRAND.ink,
              fontWeight: 700,
              fontSize: 15,
              borderRadius: "5px",
              px: 4,
              py: 1.4,
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            Download PDF
          </Button>
        </Box>
      ))}
    </Stack>
  );
}
