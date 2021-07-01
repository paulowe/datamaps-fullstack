// Fa14 Juvenile Sentence Cost Calculator
const name = "Donor Engagement Dashboard";
const id = "donordashboard";
const detail = "Helping increase donor engagement and repeat donations";
const coverImagePath =
  "/static/images/projects/2015s/donor-engagement-dashboard/ss01.png";
const clientDetail =
  "Givology is an online giving marketplace where people can browse and sponsor students and education projects in the developing world. A 100% volunteer-run organization, it partners with grassroots education organizations that lack marketing resources and are unfamiliar with using the Internet for fundraising and building awareness.";
const clientLink = "https://www.givology.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "Givology’s dashboard for donors was not serving its purpose. The dashboard provided little feedback to donors of their overall impact. Also, the dashboard did not actively encourage donors to return or give repeated donations.";
const problemImagePath = "/static/images/projects/jscc/problem.jpg";
const solution =
  "“Givology’s dashboard now provides feedback to donors of their overall impact and actively encourages donors to return or give repeated donations.”";
const solutionImagePath = "/static/images/projects/jscc/solution.jpg";
const features = [
  {
    title: "Impact Dashboard",
    detail:
      "Dashboard with impact wheel, trending/recent donations, and goal settings",
    imgPath: "/static/images/projects/2015s/donor-engagement-dashboard/ss01.png"
  },
  {
    title: "Volunteer Hours Log",
    detail: "Dashboard with impact ticker and volunteer hours log",
    imgPath: "/static/images/projects/2015s/donor-engagement-dashboard/ss01.png"
  }
];
const featureImgSize = "7";
const techStack = ["jquery", "d3js"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact/lcag";
const team = {
  type: "pic",
  detail: [
    {
      name: "Cathy Chen",
      role: "Product Manager"
    },
    {
      name: "Alex Harelick",
      role: "Developer"
    },
    {
      name: "Natasha Narang",
      role: "Developer"
    },
    {
      name: "Rodrigo Ornelas",
      role: "Developer"
    },
    {
      name: "Veronica Wharton",
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
