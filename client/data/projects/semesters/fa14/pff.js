// Fa14 Juvenile Sentence Cost Calculator
const name = "Philly Food Finder";
const id = "pff";
const detail = "Map-based web app to find local food resources";
const coverImagePath =
  "/static/images/projects/2014f/philly-food-finder/ss01.png";
const clientDetail =
  "Founded in 1996, the Greater Philadelphia Coalition Against Hunger strives to build a community where all people have the food they need to lead healthy lives. The Coalition connects people with food assistance programs and nutrition education; provides resources to a network of food pantries; and educates the public and policymakers about responsible solutions that prevent people from going hungry.";
const clientLink = "http://www.laccr.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "In Philadelphia county, 22% of residents are food-insecure. While there are food assistance programs – including food pantries, soup kitchens, and senior meal sites – available to Philadelphians, such resources may be difficult for those in need to learn about or find.";
const problemImagePath = "/static/images/projects/jscc/problem.jpg";
const solution =
  "We hope that Philly Food Finder will be a great asset to FPAC and the greater Philadelphia community. PhillyFoodFinder was a “2016 Outstanding Nominee” for the “Mayor’s Award for Distinguished Group Service Project” during the 4th Annual Mayor and County Recognition Day for National Service.";
const solutionImagePath = "/static/images/projects/jscc/solution.jpg";
const features = [
  {
    title: "Zipcode search",
    detail:
      "intuitive map-based interface that visitors use to search for food resources by zip code",
    imgPath: "/static/images/projects/2014f/philly-food-finder/ss01.png"
  },
  {
    title: "Add new food resource",
    detail:
      "suite of administrative functions that will allow the FPAC to easily add and update food resources and other content on the website",
    imgPath: "/static/images/projects/2014f/philly-food-finder/ss02.png"
  },
  {
    title: "Approved food resource",
    detail:
      "managers of food resources within Philadelphia can submit their food resource’s information for inclusion in the website’s database",
    imgPath: "/static/images/projects/2014f/philly-food-finder/ss03.png"
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
      name: "Veronica Wharton",
      role: "Product Manager"
    },
    {
      name: "Natasha Narang",
      role: "Developer"
    },
    {
      name: "Ben Sandler",
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
