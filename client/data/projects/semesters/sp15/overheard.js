// Fa14 Juvenile Sentence Cost Calculator
const name = "Nonprofit Overhead Analyzer";
const id = "nonprofit-overheard";
const detail =
  "Enables nonprofits instantly compare their expense rate to others' and find areas for savings";
const coverImagePath =
  "/static/images/projects/2015s/nonprofit-overhead-analyzer/ss01.png";
const clientDetail =
  "Urban Affairs Coalition is a coalition of 55+ partner organizations, large and small, working on diverse issues that immediately affect communities. They strengthen nonprofits through fiscal sponsorship, capacity building, and program evaluation.";
const clientLink = "http://uac.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "A lot of the nonprofits are not aware of the degree of their fiscal responsibility and potential areas of improvement. While UAC does substantial work in outreach, they would like to enable every nonprofit in the United States to be able to quickly self-analyze their expense rate. One benefit is that this will help make the initial conversation with UAC more substantial and productive.";
const problemImagePath = "/static/images/projects/jscc/problem.jpg";
const solution =
  "The app will be used by nonprofit executives to help them gauge the financial health of their entity – this will hopefully make the issue of nonprofit finances more open and transparent. Potential improvements lie in making the user experience even smoother, which overlays with the overall theme of the app - making nonprofit financial analysis as easy as possible. When there is API access for expense values for each nonprofit, it will be possible to pre-fill those for the user to make the user flow seamless.";
const solutionImagePath = "/static/images/projects/jscc/solution.jpg";
const features = [
  {
    title: "Nonprofit Search Page",
    detail: "",
    imgPath:
      "/static/images/projects/2015s/nonprofit-overhead-analyzer/ss01.png"
  },
  {
    title: "Search Results",
    detail: "",
    imgPath:
      "/static/images/projects/2015s/nonprofit-overhead-analyzer/ss02.png"
  },
  {
    title: "Save Report Form",
    detail: "",
    imgPath:
      "/static/images/projects/2015s/nonprofit-overhead-analyzer/ss03.png"
  },
  {
    title: "Saving Analytics",
    detail: "",
    imgPath:
      "/static/images/projects/2015s/nonprofit-overhead-analyzer/ss04.png"
  },
  {
    title: "Compare Overhead and Cost Efficiency",
    detail: "",
    imgPath:
      "/static/images/projects/2015s/nonprofit-overhead-analyzer/ss05.png"
  },
  {
    title: "Analyze Financials",
    detail: "",
    imgPath:
      "/static/images/projects/2015s/nonprofit-overhead-analyzer/ss06.png"
  }
];
const featureImgSize = "7";
const techStack = ["jquery", "d3js", "foundation"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact/uac";
const team = {
  type: "pic",
  detail: [
    {
      name: "Arman Tokanov",
      role: "Product Manager"
    },
    {
      name: "Maya Ebsworth",
      role: "Developer"
    },
    {
      name: "Thomas Lee",
      role: "Developer"
    },
    {
      name: "Yoni Nachmany",
      role: "Developer"
    },
    {
      name: "Nancy Wong",
      role: "Developer"
    }
  ]
};
export default {
  name,
  id,
  detail,
  coverImagePath,
  clientDetail,
  clientLink,
  clientFeatures,
  problem,
  problemImagePath,
  solution,
  solutionImagePath,
  features,
  techStack,
  quote,
  quoteSource,
  quoteSourceTitle,
  githubLink,
  previousLink,
  team,
  featureImgSize
};
