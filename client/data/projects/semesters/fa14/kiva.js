// Fa14 Juvenile Sentence Cost Calculator
const name = "Kiva Crowdsourced Due Diligence App";
const id = "kiva";
const detail =
  "Leverage volunteers to more quickly review loan applications from sustainable social organizations worldwide";
const coverImagePath = "/static/images/projects/2014f/kiva/ss01.png";
const clientDetail =
  "Kiva is a non-profit organization with a mission to connect people through lending to alleviate poverty. Leveraging the internet and a worldwide network of microfinance institutions, Kiva lets individuals lend as little as $25 to help create opportunity around the world.";
const clientLink = "http://www.laccr.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "Kiva came to us with the goal of building an app that would allow them to more quickly approve loans to entrepreneurs around the world. With the recent addition of Kiva Zip, a new Kiva product that allows non-traditional lending institutions (such as churches and schools), Kiva was receiving thousands of loan applications and needed a process by which to crowd-source application reading.";
const problemImagePath = "/static/images/projects/jscc/problem.jpg";
const solution =
  "At the end of the semester, we handed the project off to the engineering team of Kiva, who will integrate it with their systems and deploy it in the coming year. Beyond just reviewing loan applications, the “Crowdsourced Due Diligence App” needed to be a useful tool for Kiva administrators and create an effective user experience for volunteers. We sat down with a few Kiva members who gave us a detailed spec of how to accomplish those two goals.";
const solutionImagePath = "/static/images/projects/jscc/solution.jpg";
const features = [
  {
    title: "Admin Dashboard to see aggregated statistics ",
    detail:
      "intuitive map-based interface that visitors use to search for food resources by zip code",
    imgPath: "/static/images/projects/2014f/kiva/ss01.png"
  },
  {
    title: "Loan application review",
    detail:
      "suite of administrative functions that will allow the FPAC to easily add and update food resources and other content on the website",
    imgPath: "/static/images/projects/2014f/kiva/ss02.png"
  }
];
const featureImgSize = "7";
const techStack = ["flask", "jquery", "foundation"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact/lcag";
const team = {
  type: "pic",
  detail: [
    {
      name: "Dhruv Maheshwari",
      role: "Product Manager"
    },
    {
      name: "Alex Harelick",
      role: "Developer"
    },
    {
      name: "Yoni Nachmany",
      role: "Developer"
    },
    {
      name: "Rodrigo Ornelas",
      role: "Developer"
    },
    {
      name: "Arman Tokanov",
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
