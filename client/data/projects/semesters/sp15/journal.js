// Fa14 Juvenile Sentence Cost Calculator
const name = "JournalUp";
const id = "journalup";
const detail =
  "Incentivizing middle schoolers to write daily and engage with feedback from university writing tutors";
const coverImagePath = "/static/images/projects/2015s/journal-up/ss01.png";
const clientDetail =
  "JournalUp is an education start-up created by two Penn students, Jake Lerner and Valentina Raman. Their proposal placed second in the Milken-Penn GSE Education Innovation Competition, and they will be partnering with the Penn Critical Writing Center and area middle schools to launch JournalUp in fall 2015.";
const clientLink = "http://www.journalup.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "Three out of four American eighth grade students cannot write at a proficient level, and cutbacks in education funding have limited the amount of individualized feedback students receive from teachers. Studies show that daily writing exercises that provide students an opportunity to express themselves improve writing skills and increase confidence and engagement in the classroom and the wider community. The idea behind JournalUp is to supplement in-class writing instruction with a remote connection to writing tutors who provide feedback and encouragement.";
const problemImagePath = "/static/images/projects/jscc/problem.jpg";
const solution =
  "At the moment, the application will be used by several Philadelphia middles schools in collaboration with the Critical Writing Center at the University of Pennsylvania, whose tutors will have the opportunity to volunteer for the JournalUp program. When the app launches this fall, the JournalUp team hope to see increased student engagement and measurable improvements in quality of writing.";
const solutionImagePath = "/static/images/projects/jscc/solution.jpg";
const features = [
  {
    title: "Sutdent - Today's Prompt",
    detail: "Student - Today's Prompt and Your Response",
    imgPath: "/static/images/projects/2015s/journal-up/ss01.png"
  },
  {
    title: "Tutor - Grammar Tags",
    detail: "Tutor - Review - Grammar Tags",
    imgPath: "/static/images/projects/2015s/journal-up/ss02.png"
  },
  {
    title: "Student - Feedback",
    detail: "Student - Feedback - Reviewer Comments and Grammar Comments",
    imgPath: "/static/images/projects/2015s/journal-up/ss03.png"
  },
  {
    title: "Student - Points",
    detail: "Student - Points - Grammar, Content, Total",
    imgPath: "/static/images/projects/2015s/journal-up/ss04.png"
  },
  {
    title: "Teacher - Students List",
    detail: "Teacher - Students List",
    imgPath: "/static/images/projects/2015s/journal-up/ss05.png"
  }
];
const featureImgSize = "7";
const techStack = ["jquery", "d3js", "flask"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact/lcag";
const team = {
  type: "pic",
  detail: [
    {
      name: "Max McCarthy",
      role: "Product Manager"
    },
    {
      name: "Jonathan Dubin",
      role: "Developer"
    },
    {
      name: "Sally Kong",
      role: "Developer"
    },
    {
      name: "Annie Meng",
      role: "Developer"
    },
    {
      name: "Alex Piatski",
      role: "Developer"
    },
    {
      name: "Ben Sandler",
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
