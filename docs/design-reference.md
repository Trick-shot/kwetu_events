# KEI Website Rebuild — Design Reference

Source: https://kei.or.tz/ (WordPress + Consultio theme + Elementor + Revolution Slider)
Target stack: React + Vite + MUI (frontend), Django (phase 2 backend)
Figma: file `jxaYH9HrJfzQgZyHUntOwz`, page "Kwetu Events Internation"
Deploy target: gcitz.org on a WazoHost VPS (to be ordered)

## Brand

- Primary yellow: `#F7C522` (buttons, accents, preloader bg)
- Navy: `#001846` (active nav pill, dark CTA band)
- Dark text: `#0E0E0E` / `#383838`
- Font: Roboto (all text); headings bold with tight line-height
- Logo: script "Kwetu" + serif "EVENTS" + letterspaced "INTERNATIONAL"; white variant in footer
  - `wp-content/uploads/2024/08/KWETU-01.png` (color), `KWETU2-01` (white)

## Global layout

- Header: white bar, logo left, nav right. Active item = navy rectangle with white text
  and yellow underline bar. Search icon + hamburger (offcanvas) at far right.
  Sticky on scroll (slides down, slightly shorter).
- Preloader: full-screen yellow (#F7C522) with 3 white dots pulsing animation.
- Scroll-to-top: round yellow FAB bottom-right with up arrow, appears after scrolling.
- Page banner (inner pages): full-width photo (hands holding seedling) with dark overlay,
  centered white bold title + breadcrumb "Home - {Page}".
  NOTE: live site has wrong banner titles on What We Do ("About us") and News ("Blog Grid") — fix.
- Footer: dark photo-overlay bg; col 1: white logo, org name, P.O. Box 4447 Dar Es Salaam,
  +255 742 993 331, info@kei.or.tz; col 2: "Links" two-column page list with arrow icons;
  col 3: "Newsletter" blurb + social icons (facebook, twitter, instagram).
  Bottom bar: "{year} © All rights reserved by KEI".
- Animations: scroll-reveal fade-up on sections (WOW.js style), counter animations,
  slick carousels. Recreate with framer-motion + swiper.

## Pages

### Home (/)
1. Hero slider (RevSlider): full-screen photo bg, big white headline
   "Making our planet Earth a better place for its habitat and the universe",
   sub "Linking Tanzanian community to the United Nations environment conservation programs.",
   yellow "Our Services" button.
2. White card overlapping hero bottom, 4 columns: Conservation / Climate Change / Inclusivity / FOCUS
   (short paragraphs each).
3. About section: label "About us" + yellow dash, H2 "We're a crucial stakeholder on Environment
   Conservation.", two paragraphs, yellow "Read More" button; right side: video popup thumbnail,
   vertical "6 Years of Experience" badge, plant illustration card.
4. Get involved: 4 columns w/ outlined yellow icons: Become a member / Volunteer / Donate / Advocate.
5. Partners & Donors: centered H2 + blurb, logo row (TASAC, Tanzania National Parks, TFS,
   Tanzania Ports Authority, Roads Fund Board, Rural Energy Agency) — grayscale→color on hover.

### About Us (/about-us/)
- Banner "About us"
- Intro: side-label, H2 "Driving Global Environmental Change Through Local Action",
  2 paragraphs; right: man-hugging-earth illustration image.
- "Our Name: KEI elaborated": 2-col arrow list — KWETU (Swahili "Our Home") / Events /
  International / Initiative.
- Vision Statement: "To create resilient and thriving local communities by fostering sustainable
  environments and effectively mitigating the impacts of climate change."
- Mission Statement: "Our mission is to serve as a transformative organization; by empowering
  communities through innovative, and community-centered environmental conservation solutions."
- Objectives: 7 arrow bullets (awareness, empower communities, youth/green-business capital,
  research advocacy, conserve forests/mangroves/water, UN SDGs, forestation/recycling/cleaning).
- Our Values — "We are GREEN" acronym: Genuineness, Resolve, Expertise, Ecological, Non Polluting.
- Navy CTA band: "Want to know more about us? Download our Endorsements..." + white
  "Endorsements" download button.
- Team: H2 "Our Local and Global Conservation Efforts Sharpens Our team to Excellence." + blurb;
  photo cards (267x352) w/ name+role overlay card: Chairman of the Board, Ms Josca,
  Amani Sapi Mkwawa, Advocate Pasience Mlowe, Alpha Emil Bisimba, Adenmaris Gerald Kowero.

### What We Do (/what-we-do/)
- Banner (fix title to "What We Do")
- Side-label + H2 "We're an action based NGO linking Community to Action",
  long two-column text (6 paragraphs, captured in full in page text snapshot).

### Projects (/projects/)
- Banner "Projects"
- H2 "Empowering Communities Through Sustainable Innovation" + right-aligned blurb.
- 3x2 card grid (image 600x332 + title) linking to detail pages:
  1. Journey towards World Environment Day → /portfolio/jowed/
  2. Recycling → /portfolio/recycling/
  3. Clean Energy → /portfolio/clean-energy/
  4. Bees and Biodiversity → /portfolio/bees-and-biodiversity/
  5. Anti-Poaching, Land Acquisition and Afforestation → /portfolio/anti-poaching-land-acquisition-and-afforestation/
  6. Tourism → /portfolio/tourism/

### Project detail (template)
- Side-label "Projects", H1 title, body content (JOWED full text captured),
  "Download PDF" button, Previous/Next links, related-projects carousel.
- Remaining 5 project bodies still to capture from live site at build time.

### News & Updates (/news-updates/)
- Banner (fix title to "News & Updates")
- Side-label "News & Updates", H2 "Latest News & Updates" + right blurb.
- Blog card grid: photo, white card overlapping bottom with date/author strip + bold title.
- 5 posts (slugs are leftover demo slugs on live site — use clean slugs in rebuild):
  1. Gratitude to Lord Mayor of Dar Es Salaam City Omary Kumbilamoto (JOWED launch)
  2. Planting Trees for World Environment Day w/ Medical Stores Dept staff
  3. Introducing NGO to Deputy Speaker Hon. Mussa Azzan Zungu (MP)
  4. Courtesy visit in Dodoma to Mr. Rashid Kalimbaga (Roads Fund Board MD)
  5. Visit to Dr. Switbert Z. Mkama, then Deputy PS Vice President's Office
- Post bodies still to capture at build time.

### Contact Us (/contact-us/)
- Banner "Contact"
- Dark overlay section: left — H2 "Get in touch for any kind of help and informations",
  icon boxes: head office address (New Vibe - Kinyerezi Street, House No. 9 Near Ilala Municipal
  Court Ilala, P.O. Box 4447, Dar Es Salaam), Call for help (+255 742 993 331, +255 736 993 331),
  Mail (info@kei.or.tz, ceo@kei.or.tz).
- Right: form — First name*, Last name*, Your mail*, Phone number*, Organization/Company*,
  Subject (select), Message; yellow "Send now" button. (Phase 1: UI only / mailto or stub;
  phase 2: Django endpoint.)

## Assets strategy

Phase 1 references images by absolute URL from kei.or.tz (client's own assets).
Before production deploy, pull /wp-content/uploads originals onto the VPS or into the repo.
Key assets: KWETU-01.png (logo), KWETU2-01 (white logo), banner hands-seedling photo,
hero bg, team photos (267x352), project thumbs (600x332), partner logos.
