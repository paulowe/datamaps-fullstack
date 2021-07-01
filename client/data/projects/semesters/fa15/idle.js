// Fa14 Juvenile Sentence Cost Calculator
const name = "IdleFreePhilly";
const id = "idlefreephilly";
const detail = "Crowdsourcing Illegal Idling in Philadelphia";
const coverImagePath = "/static/images/projects/2015f/idle-free/ss01.png";
const clientDetail =
  "Established in 1967, Clean Air Council (CAC) is Philadelphia’s oldest environmental conservation organization. The Council is dedicated to protecting and defending everyone’s right to breathe clean air. The Council works through a broad array of related sustainability and public health initiatives, using public education, community action, government oversight, and enforcement of environmental laws.";
const clientLink = "http://cleanair.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "Idling happens when a vehicle’s engine is unnecessarily left running while it is stopped. In some cities (including Philadelphia), idling of large vehicles such as trucks and buses is illegal due to its economic, health, and climate costs. The purpose of IdleFreePhilly was to provide a web and SMS platform for reporting and visualizing illegal idling of large vehicles in Philadelphia. This helps Clean Air Council in identifying problematic city agencies and companies to help them self-correct and train their personnel.";
const problemImagePath = "/static/images/projects/jscc/problem.jpg";
const solution =
  "Clean Air Council said that through IdleFreePhilly, they were able to record more than a 1000 illegal idling incidents. This allowed Clean Air Council to target specific agencies which had high idling counts with concrete evidence and persuaded these agencies to retrain their employees to prevent future idling.";
const solutionImagePath = "/static/images/projects/jscc/solution.jpg";
const features = [
  {
    title: "Map of Reported Illegal Idling Incidents",
    detail: "",
    imgPath: "/static/images/projects/2015f/idle-free/ss01.png"
  },
  {
    title: "Example Illegal Idling Incident Report",
    detail: "",
    imgPath: "/static/images/projects/2015f/idle-free/ss02.png"
  },
  {
    title: "Web Form for Reporting",
    detail: "",
    imgPath: "/static/images/projects/2015f/idle-free/ss03.png"
  },
  {
    title: "FAQ",
    detail: "",
    imgPath: "/static/images/projects/2015f/idle-free/ss04.png"
  }
];
const featureImgSize = "7";
const techStack = ["flask"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://www.github.com/hack4impact/idle-free-philly";
const team = {
  type: "pic",
  detail: [
    {
      name: "Sally Kong",
      role: "Product Manager"
    },
    {
      name: "Ben Sandler",
      role: "Developer"
    },
    {
      name: "Thomas Lee",
      role: "Developer"
    },
    {
      name: "Alex Piatski",
      role: "Developer"
    },
    {
      name: "Kyle Rosenbluth",
      role: "Developer"
    },
    {
      name: "Sanjay Subramanian",
      role: "Developer"
    },
    {
      name: "Riley Wong",
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
