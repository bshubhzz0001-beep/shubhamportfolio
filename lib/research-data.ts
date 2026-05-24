/**
 * Patents, copyrights & publications with official links
 * extracted from PORTFOLIO SHUBHAM.pdf embedded hyperlinks.
 */

export const LINKS = {
  patentStatus:
    "https://ipindiaservices.gov.in/PatentSearch/PatentSearch/ViewApplicationStatus",
  copyrightPortal:
    "https://copyright.gov.in/UserRegistration/frmHome.aspx",
  copyrightSearch: "https://copyright.gov.in/SearchCopyright.aspx",
  asceOriginalArticle:
    "https://ascelibrary.org/doi/epdf/10.1061/(ASCE)HZ.2153-5515.0000718",
} as const;

export type PatentItem = {
  title: string;
  status: string;
  ref: string;
  applicationNo?: string;
  problem: string;
  objective: string;
  claims: string[];
  hours: string;
  link: string;
  linkLabel: string;
};

export type PublicationItem = {
  title: string;
  status: string;
  registrationNo?: string;
  link: string;
  linkLabel: string;
};

export const patents: PatentItem[] = [
  {
    title: "An Apparatus for Extracting and Testing of Bituminous Mix",
    status: "Under Granting",
    ref: "Indian Patent (37/22)",
    applicationNo: "202237",
    problem:
      "No reliable on-site extraction method for flexible pavement",
    objective:
      "Low-cost hot-in-place mobile machinery with microwave technology",
    claims: [
      "GPS System",
      "AI & Cloud Computing",
      "Auto Ignition",
      "Time Efficient",
    ],
    hours: "1800+",
    link: LINKS.patentStatus,
    linkLabel: "View on IP India",
  },
  {
    title: "An Apparatus for Production of Water-Based Foamed Bitumen Mix",
    status: "Under Granting",
    ref: "Indian Patent",
    problem: "No reliable foamed bitumen production method",
    objective: "Eco-friendly on-site foamed bitumen machinery",
    claims: ["Eco-friendly GPS", "Save Natural Resources", "Auto Ignition"],
    hours: "300+",
    link: LINKS.patentStatus,
    linkLabel: "View on IP India",
  },
  {
    title: "Universal Hybrid Model to Predict Mix Based Cube Failure Mode",
    status: "Under Preparation",
    ref: "Indian Patent",
    problem:
      "Expensive concrete database collection; no GAN model available",
    objective: "Hybrid GAN-ANN model for concrete mix data generation",
    claims: ["Big Data", "Hybrid GAN-ANN", "Mobile Application"],
    hours: "880+",
    link: LINKS.patentStatus,
    linkLabel: "View on IP India",
  },
];

export const copyrights: PublicationItem[] = [
  {
    title:
      "Enhancing Asphalt Concrete Mix Properties With Paint Sludge",
    status: "GRANTED",
    registrationNo: "CN5-1-001-0013",
    link: LINKS.copyrightPortal,
    linkLabel: "Copyright Office",
  },
  {
    title:
      "Manufacturing of Effective Clay Bricks Using Waste Plastic with Wheat Husk & Fly Ash",
    status: "GRANTED",
    registrationNo: "CN5-2-001-0014",
    link: LINKS.copyrightPortal,
    linkLabel: "Copyright Office",
  },
  {
    title:
      "Effect of GGBFS and Slag Sand on Concrete Mix Design of Grade M35",
    status: "GRANTED",
    registrationNo: "CN5-3-001-0013",
    link: LINKS.copyrightPortal,
    linkLabel: "Copyright Office",
  },
  {
    title:
      "Laboratory Evaluation of Asphalt Concrete Mix With Biogas Sludge for Pothole Repair",
    status: "GRANTED",
    registrationNo: "CN5-4-001-0014",
    link: LINKS.copyrightPortal,
    linkLabel: "Copyright Office",
  },
];

export const discussions: (PublicationItem & {
  authors: string;
  originalArticle: string;
})[] = [
  {
    title:
      "Laboratory and Field Evaluation of Stabilized Fly Ash as Alternative Material for Sustainable Pavement",
    status: "Under Review",
    authors: "Shubham R. Beldar, Siddhesh Jagtap, Hemant B. Dhonde",
    originalArticle:
      "Satish Barmade, Satyajit Patel, Ashish Dhamaniya (2022) — J. Hazardous, Toxic, and Radioactive Waste",
    link: LINKS.asceOriginalArticle,
    linkLabel: "Read original article (ASCE)",
  },
  {
    title:
      "Investigation into Sustainable Application of Class C Fly Ash Layer in Flexible Pavement",
    status: "Under Preparation",
    authors: "Shubham R. Beldar, Siddhesh Jagtap, Hemant B. Dhonde",
    originalArticle:
      "S. Patel, A. R. Joshi (2022) — J. Hazardous, Toxic, and Radioactive Waste",
    link: LINKS.asceOriginalArticle,
    linkLabel: "Read original article (ASCE)",
  },
];

export const technicalNote = {
  title:
    "Development and Study of a Floating Syphon as a Discharge Measuring Device",
  status: "In Process",
  hours: "560+",
};

export const universityProject = {
  title: "Pneumatically Operated Plastering Machine",
  cost: "Rs. 1000–1500",
  weight: "1500g",
  life: "5–8 years",
};
