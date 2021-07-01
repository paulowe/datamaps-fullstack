// Fa14 Juvenile Sentence Cost Calculator
const name = "BusyBooth";
const id = "busybooth";
const detail =
  "Help voters figure out when to cast their ballots using crowd-sourced polling place wait times";
const coverImagePath = "/static/images/projects/2016s/busy-booth/cover.jpeg";
const clientDetail =
  "The OSET Institute is all about making elections software technology publicly available in order to increase verification, accuracy, security, and transparency (in process), and ensure that ballots are counted as cast. The work is all about integrity in election";
const clientLink = "http://www.osetfoundation.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "The January 2014 Presidential Commission on Election Administration (PCEA) report, triggered by the extraordinarily long lines witnessed in the 2012 Presidential election, includes several recommendations whose goal is to improve the voter experience. One way to address the polling place wait time and reduce line length is providing better and faster information to the voters who make up those lines, which could allow them to determine the best time to go, thus smoothing the traffic spikes that typically occur at certain times of the day. BusyBooth directly addresses that problem with an open source, mobile App that informs voters of the expected wait time at their assigned polling place based on self-reported information from others already in line and/or casting their ballots.";
const problemImagePath = "/static/images/projects/jscc/problem.jpg";
const solution =
  "The 1st successful outcome, well within 12 months of starting, would be the development, and preliminary usability testing for BusyBooth for an Election. A 2nd successful outcome would be the use of BusyBooth technology to support our collaboration with the Bipartisan Policy Center to improve their tools for studying long lines at polling places. A 3rd and important successful outcome over a 6-12 month timeframe after introduction of BusyBooth would be widespread adoption of the required API support of election jurisdictions to enable broader usage of the App, which would in turn, provide more data useful for elections officials seeking solutions to polling place operational efficiency issues.";
const solutionImagePath = "/static/images/projects/jscc/solution.jpg";
const features = [
  {
    title: "Directions",
    detail: "Directions with time in minutes",
    imgPath: "/static/images/projects/2016s/busy-booth/ss01.jpeg"
  },
  {
    title: "Polling address",
    detail:
      "My Polling Place with address and buttons to View Wait Time and Get Driving Directions",
    imgPath: "/static/images/projects/2016s/busy-booth/ss02.jpeg"
  },
  {
    title: "Past Poll Times",
    detail:
      "Past Poll Times, with the approximate wait time and past wait times every hour",
    imgPath: "/static/images/projects/2016s/busy-booth/ss03.jpeg"
  },
  {
    title: "Navigation Menu",
    detail: "Menu with My Polling Place, Directions, and Past Poll Times",
    imgPath: "/static/images/projects/2016s/busy-booth/ss04.jpeg"
  }
];
const featureImgSize = "7";
const techStack = ["flask"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://www.github.com/hack4impact/busy-booth";
const team = {
  type: "pic",
  detail: [
    {
      name: "Krishna Bharathala",
      role: "Product Manager"
    },
    {
      name: "Cathy Chen",
      role: "Product Manager"
    },
    {
      name: "Hunter Lightman",
      role: "Developer"
    },
    {
      name: "Sanjay Subramanian",
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
