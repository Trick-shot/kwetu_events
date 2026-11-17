// All site content for phase 1 (static). Phase 2: served by the Django API.
// Images live in public/assets (captured from the client's current site at kei.or.tz).
// Replace with full-resolution originals from the WP media library before final launch.

const A = `${import.meta.env.BASE_URL}assets`;

export const ASSETS = {
  logo: `${A}/gci-logo.png`, // official GCI logo
  logoWhite: `${A}/gci-logo-dark-bg.png`, // official logo, blue lightened for dark footer
  banner: `${A}/banner.jpg`,
  heroBg: `${A}/hero.jpg`,
  saveTheWorld: `${A}/save-the-world.png`,
  sdgStillLife: `${A}/sdg.jpg`,
  kids: `${A}/news-kids.jpg`,
};

export const SITE = {
  name: "Green Conservation Initiative",
  short: "GCI",
  address:
    "New Vibe - Kinyerezi Street, House No. 9 Near Ilala Municipal Court Ilala, P.O. Box 4447, Dar Es Salaam, Tanzania",
  addressShort: "P.O. Box 4447, Dar Es Salaam, Tanzania",
  phones: ["+255 722 871 186"],
  emails: ["info@gcitz.org"], // TODO client: confirm GCI's phones + address
};

export const NAV = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "What We Do", path: "/what-we-do" },
  { label: "Projects", path: "/projects" },
  { label: "News & Updates", path: "/news-updates" },
  { label: "Contact Us", path: "/contact-us" },
];

export const HOME = {
  hero: {
    title: "Making our planet Earth a better place for its habitat and the universe",
    subtitle:
      "Linking Tanzanian community to the United Nations environment conservation programs.",
    cta: "Our Services",
  },
  pillars: [
    {
      title: "Conservation",
      text: "Our NGO aims to enhance conservation efforts by using scientific evidence to help achieve the UN's goal of protecting 30% of land and marine territories by 2030.",
    },
    {
      title: "Climate Change",
      text: "Our mission is to lead in advocating practices to combat global warming and its impacts on Earth's climate system, protecting human health and communities.",
    },
    {
      title: "Inclusivity",
      text: "We strive to unite all stakeholders in advocating for renewable energy, sustainable transportation, reforestation, and climate change awareness through daily joint community efforts.",
    },
    {
      title: "Focus",
      text: "Use of technology and proper projects management are key tools to maintaining our mission and vision. We keep environment restoration as our focus of attention.",
    },
  ],
  about: {
    label: "About us",
    title: "We're a crucial stakeholder on Environment Conservation.",
    paragraphs: [
      "Welcome to Green Conservation Initiative. Aligned with the United Nations' global efforts in ecosystem restoration and forestation, we are dedicated to tackling climate change and global warming from our base in Tanzania. We use creative arts, technology, and strategic communication to address urgent environmental challenges.",
      "Our team works alongside the UN and local governments to enhance environmental conservation, forestry, and biodiversity. Through community engagement and innovative approaches, we strive to create lasting positive impacts. Discover more about our initiatives and join us in making a greener planet.",
    ],
    yearsBadge: "6 Years of Experience",
  },
  involvement: [
    {
      title: "Become a member",
      text: "By becoming a member, you join a global community dedicated to supporting and conserving biodiversity in Tanzania.",
    },
    {
      title: "Volunteer",
      text: "By volunteering with us, you will play a crucial role in shaping a better future for both nature and communities in Tanzania.",
    },
    {
      title: "Donate",
      text: "Your generous donation helps us invest in a brighter future for birds, people, and the environment.",
    },
    {
      title: "Advocate",
      text: "Help us spread the message of conservation through your networks. By uniting in our efforts to protect nature, we are safeguarding our own home—the world.",
    },
  ],
  partnersBlurb:
    "Our Partners & Donors are vital contributors who share our vision and support our mission with their generous resources and unwavering commitment. Their collaboration empowers us to drive meaningful change and achieve impactful outcomes.",
};

export const PARTNERS = [
  { name: "TASAC", img: `${A}/partners/tasac.png` },
  { name: "Tanzania National Parks", img: `${A}/partners/tanapa.png` },
  { name: "Tanzania Forest Services", img: `${A}/partners/tfs.png` },
  { name: "Tanzania Ports Authority", img: `${A}/partners/tpa.png` },
  { name: "Roads Fund Board", img: `${A}/partners/roads-fund.png` },
  { name: "Rural Energy Agency", img: `${A}/partners/rea.png` },
  { name: "Mkwawa", img: `${A}/partners/mkwawa.png` },
  { name: "United Republic of Tanzania", img: `${A}/partners/tanzania.png` },
  { name: "KTCL", img: `${A}/partners/ktcl.png` },
  { name: "NHC", img: `${A}/partners/nhc.png` },
  { name: "The Mining Commission", img: `${A}/partners/mining-commission.png` },
  { name: "Sahara Ventures", img: `${A}/partners/sahara-ventures.png` },
  { name: "CRDB Bank", img: `${A}/partners/crdb.png` },
  { name: "WCF", img: `${A}/partners/wcf.png` },
  { name: "PURA", img: `${A}/partners/pura.png` },
  { name: "UTT AMIS", img: `${A}/partners/utt-amis.png` },
  { name: "Medical Stores Department", img: `${A}/partners/msd.png` },
];

export const ABOUT = {
  title: "Driving Global Environmental Change Through Local Action",
  paragraphs: [
    "The United Nations works onto ecosystem restoration and forestation of the world. Tanzania as a country is tirelessly dedicated into acting on climate change and global warming. Green Conservation Initiative is an integrated communication & action based Non Government Organization (NGO) that understands the struggle of making the world a better place for its habitats and the universe well being.",
    "Proper and timely knowledge communication, use of creative arts, technology, the internet, and through community engagement Green Conservation Initiative is dedicated to sustainably compliment these UN & Government's efforts towards environmental conservation, forestry & biodiversity, and making the world a better place.",
  ],
  // DRAFT copy — needs Amani's approval
  nameMeaning: [
    {
      term: "GREEN",
      text: "We stand for a green planet; protecting the forests, mangroves, wetlands, freshwater sources and biodiversity that make Earth a home for humans, animals and all life.",
    },
    {
      term: "CONSERVATION",
      text: "Conservation is our daily work; restoring ecosystems, promoting clean energy, recycling and eco-friendly livelihoods, and standing against environmental destruction.",
    },
    {
      term: "INITIATIVE",
      text: "Grass-root innovative and inclusive efforts are potential to the global environment agenda. Carefully planned and results oriented initiations are to be adopted for success.",
    },
  ],
  vision:
    "To create resilient and thriving local communities by fostering sustainable environments and effectively mitigating the impacts of climate change.",
  mission:
    "Our mission is to serve as a transformative organization; by empowering communities through innovative, and community-centered environmental conservation solutions.",
  objectives: [
    "To raise awareness among local communities and the public on the environment and climate change.",
    "To empower local communities to participate in environment conservation.",
    "Empower the youth and green-business start-ups by providing capital and technical support necessary for their sustainable growth.",
    "Advocate for practical research and technological advancement for nature-friendly community transformation.",
    "Conserving and protecting forests, mangroves, freshwater sources and water bodies.",
    "To actively help attaining the United Nations Sustainable Development goals and participate in Sustainable Global Development Agenda policy build-up and implementation.",
    "To actively participate in forestation, waste management activities, recycling activities, recycling advocacy, and cleaning activities.",
  ],
  valuesIntro:
    "We are Green. We are environmentalists and we are confident; and we are to be in action and we are courageous.",
  values: [
    {
      letter: "G",
      name: "Genuineness",
      text: "We believe in loyalty and trust, Forming strategic alliances and partnerships. Respect being a tool of sustainable prosperity and growth.",
    },
    {
      letter: "R",
      name: "Resolve",
      text: "We are focused in attaining goals. We have to see through the challenges, no matter the complexity. In our unity we resolved to tackle the toughest of setbacks.",
    },
    {
      letter: "E",
      name: "Expertise",
      text: "We embrace exceptional talent and experience. We encourage smart-creative and innovators to create solutions for the most complex problems.",
    },
    {
      letter: "E",
      name: "Ecological",
      text: "We believe in ecological balance, that humans can live in harmony with nature including animals, birds, aqua life and wide range of biodiversity.",
    },
    {
      letter: "N",
      name: "Non Polluting",
      text: "We advocate ideal utilization of technological advancement to attain pollution free world. Cleanliness and Recycling should become a life-style from the grass-root of our communities.",
    },
  ],
  teamTitle: "Our Local and Global Conservation Efforts Sharpens Our team to Excellence.",
  teamBlurb:
    "We also bring a strong interest in coaching and capability building, within an emphasis on emotional intelligence and effective partners relations.",
  team: [
    { name: "Chairman of the Board", role: "", img: `${A}/team/chairman.jpg` },
    { name: "Ms Josca", role: "", img: `${A}/team/josca.jpg` },
    { name: "Amani Sapi Mkwawa", role: "", img: `${A}/team/amani.jpg` },
    { name: "Advocate Pasience Mlowe", role: "", img: `${A}/team/pasience.jpg` },
    { name: "Alpha Emil Bisimba", role: "", img: `${A}/team/alpha.jpg` },
    { name: "Adenmaris Gerald Kowero", role: "", img: `${A}/team/adenmaris.jpg` },
  ],
};

export const WHAT_WE_DO = {
  title: "We're an action based NGO linking Community to Action",
  paragraphs: [
    "Green Conservation Initiative (GCI) being an action based Non Government Organization (NGO) strives at making the world a better place for all life there is. To attain this GCI believes inclusivity is a must! And that these efforts should be on daily basis.",
    "Our main responsibility is to become extra-creative to reaching our desired vision without compromising our core values; we are doing so in alignment with global efforts towards sustainable environment conservation and the pursuit of the 2030 Agenda for Sustainable Development.",
    "GCI firmly believe economic reasons are often major ingredient to environment ruin and therefore the major solution is to innovatively propose and introduce eco-friendly businesses which will provide alternatives to traditional commerce such as charcoal production and selling which is harmful to the environment.",
    "It is our belief that providing communities with natural gas bottles for their cooking itself is not enough! Ask yourself what happens when they run out of gas, where do they get the money to refuel, won't they opt to the old ways of selling woods and charcoal production for sale in order to refuel their natural cooking gas bottles? We therefore apart from educating our communities on the impacts of environmental destruction and advantages of conservation, train them on sustainable green businesses which will earn our communities even more income such as bee keeping and selling of bee products, we go as far as networking them with international markets. It is only by alternative businesses and by providing affordable technology shall our communities opt to environment conservation.",
    "It is our duty therefore to creatively be at forefront in the fields, to educate our communities from young ones in schools to youths in colleges, to every household on eco-system restoration, train on eco-friendly businesses, and encourage Green-Businesses Start-ups.",
    "We then communicate our efforts to stakeholders and urge, both local and International Organizations to partner and sponsor these efforts in order to bring about tangible and sustainable results.",
  ],
};

export interface Project {
  slug: string;
  title: string;
  img: string;
  intro?: string;
  body: string[];
  bullets?: string[];
}

export const PROJECTS_PAGE = {
  title: "Empowering Communities Through Sustainable Innovation",
  blurb:
    "GCI empowers communities with eco-friendly solutions and green business opportunities, promoting sustainable practices for a greener future.",
};

export const PROJECTS: Project[] = [
  {
    slug: "jowed",
    title: "Journey towards World Environment Day",
    img: `${A}/projects/jowed.jpg`,
    intro:
      "This is an annual project aiming at community education and inclusive social action. It was launched on 24th June 2023 by Hon. Deputy Speaker Mussa Azzan Zungu (MP). Within this project there are a number of programs as follows:-",
    body: [],
    bullets: [
      "Introduction of Mazingira (Environment) Clubs in Secondary Schools, colleges, Universities and Working Places. We are current introducing Universities Environment Clubs Network called UNI Mazingira Clubs Network (UMCN).",
      "Awarding creative green-businesses ideas and eco-friendly starts-ups.",
      "Promoting building plastic recycling industries contributing to zero waste.",
      "Provide basic training on bee keeping and distribution of free bee hives to interested parties.",
      "For the year 2024 -2025 build up the online Mazingira Wall of Fame as an awarding platform of the well designed and recognizable environment conservation initiatives. From the year 2025-2026 the physical Wall of Fame will be built.",
      "Mazingira (Environment) Special Song an artistic and creative way to deliver the environment agenda to our community.",
      "Community Sensitization",
      "Social Media Campaigns on Clean Energy and Environment Conservation in general.",
      "Provision of free Natural Cooking gas bottles.",
      "Ocean beach, lake shores, river banks, street cleaning and trees planting.",
      "Commemorate international day of forestry each 21st March and World Environment Day On each 5th June.",
      "Attending local and international conferences on environment including the United Nations Climate Change Convention on Climate Change (UNFCCC).",
    ],
  },
  {
    slug: "recycling",
    title: "Recycling",
    img: `${A}/projects/recycling.jpg`,
    body: ["Project description coming soon."], // TODO: capture from live site
  },
  {
    slug: "clean-energy",
    title: "Clean Energy",
    img: `${A}/projects/clean-energy.jpg`,
    body: ["Project description coming soon."], // TODO: capture from live site
  },
  {
    slug: "bees-and-biodiversity",
    title: "Bees and Biodiversity",
    img: `${A}/projects/bees.jpg`,
    body: ["Project description coming soon."], // TODO: capture from live site
  },
  {
    slug: "anti-poaching-land-acquisition-and-afforestation",
    title: "Anti-Poaching, Land Acquisition and Afforestation",
    img: `${A}/projects/anti-poaching.jpg`,
    body: ["Project description coming soon."], // TODO: capture from live site
  },
  {
    slug: "tourism",
    title: "Tourism",
    img: `${A}/projects/tourism.jpg`,
    body: ["Project description coming soon."], // TODO: capture from live site
  },
];

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  img: string;
  body: string[];
}

export const NEWS_PAGE = {
  title: "Latest News & Updates",
  blurb:
    "Stay updated with Green Conservation Initiative's latest projects and milestones. Our news and updates provide insights into our ongoing efforts in environmental conservation and community engagement.",
};

// TODO: capture full post bodies + real images from live site at content-migration time
export const NEWS: NewsPost[] = [
  {
    slug: "launching-of-jowed",
    title:
      "Giving our gratitude to the Lord Mayor of Dar Es Salaam City Omary Kumbilamoto for his support during the Launching of JOWED",
    date: "November 5, 2019",
    author: "Admin",
    img: `${A}/news-1.jpg`,
    body: ["Full story coming soon."],
  },
  {
    slug: "planting-trees-world-environment-day",
    title:
      "Planting Trees to Commemorate the World Environment Day with staff member from Medical Stores Department of Tanzania",
    date: "November 5, 2019",
    author: "Admin",
    img: `${A}/news-2.jpg`,
    body: ["Full story coming soon."],
  },
  {
    slug: "introducing-ngo-deputy-speaker",
    title:
      "Introducing and Explaining the importance of our NGO to the Deputy Speaker of the Parliament of United Replic of Tanzania Hon. Mussa Azzan Zungu (MP)",
    date: "November 5, 2019",
    author: "Admin",
    img: `${A}/news-3.jpg`,
    body: ["Full story coming soon."],
  },
  {
    slug: "courtesy-visit-roads-fund-board",
    title:
      "We paid a courtesy visit in Dodoma to Mr. Rashid Kalimbaga the Managing Director of Roads Fund Board",
    date: "November 5, 2019",
    author: "Admin",
    img: ASSETS.kids,
    body: ["Full story coming soon."],
  },
  {
    slug: "visit-dr-switbert-mkama",
    title:
      "Paid a visit to Dr. Switbert Z. Mkama in 2023 then Deputy Permanent Secretary (PS) Vice President's Office",
    date: "November 5, 2019",
    author: "Admin",
    img: ASSETS.kids,
    body: ["Full story coming soon."],
  },
];

export const CONTACT = {
  title: "Get in touch for any kind of help and informations",
  blurb:
    "We're glad to discuss your organisation's situation. So please contact us via the details below, or enter your request.",
  subjects: ["General Inquiry", "Partnership", "Volunteering", "Donation", "Media"],
};
