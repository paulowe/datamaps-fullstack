import Donor from "./donor";
import Journal from "./journal";
import Overheard from "./overheard";

// Fa14 Project Data
export default {
  semester: "Spring 2015",
  projects: [
    {
      ...Donor
    },
    {
      ...Journal
    },
    {
      ...Overheard
    }
  ]
};
