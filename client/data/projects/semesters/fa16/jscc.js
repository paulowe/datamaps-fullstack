// Fa14 Juvenile Sentence Cost Calculator
const name = "Juvenile Sentence Cost Calculator";
const id = "jscc";
const detail =
  "Simply calculates and compares different expenditures for juvenile sentences to help attorneys and advocates";
const coverImagePath = "/static/images/projects/jscc/ss01.png";
const clientDetail =
  "The Louisiana Center for Children’s Rights is a non-profit that defends the right of every Louisiana child to fairness, dignity, and opportunity. It is the only specialized juvenile defense law office in the country and houses the Louisiana Children’s Advocacy Group that advocates for a more fair and compassionate juvenile justice system.";
const clientLink = "http://www.laccr.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "The cost of a sentence has a huge impact on a judge’s ruling and is often used by the advocacy group to expose inefficiencies in the system. However calculating and comparing different expenditures is a tedious and arduous task that many attorneys and advocates simply do not have time for. The organization thus applied to Hack4Impact for help building a juvenile sentence cost calculator";
const problemImagePath = "/static/images/projects/jscc/problem.jpg";
const solution =
  "Hopefully the product can make it easier for lawyers and advocates to calculate sentence costs used in defending the rights of children and improving the juvenile justice system.";
const solutionImagePath = "/static/images/projects/jscc/solution.jpg";
const features = [
  {
    title: "Choose sentence type",
    detail: "Choose sentence type; duration in years, month, and days",
    imgPath: "/static/images/projects/jscc/ss01.png"
  },
  {
    title: "Calculate sentence cost",
    detail:
      "Calculate a single sentence in dollars; add different sentence choices",
    imgPath: "/static/images/projects/jscc/ss02.png"
  },
  {
    title: "Compare sentence costs",
    detail:
      "Visualize comparative sentence costs on scale; see dollar difference between sentence costs",
    imgPath: "/static/images/projects/jscc/ss01.png"
  }
];
const featureImgSize = "7";
const techStack = ["jquery", "d3js", "foundation"];
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
      name: "Ali Altaf",
      role: "Developer"
    },
    {
      name: "Natalie Borowski",
      role: "Developer"
    },
    {
      name: "Rachel Hong",
      role: "Developer"
    },
    {
      name: "Thomas Lee",
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
