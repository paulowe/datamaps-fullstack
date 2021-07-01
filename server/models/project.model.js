const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  codeUrl: { type: String },
  projectUrl: { type: String },
  shortSummary: { type: String, required: true },
  techStack: { type: String, required: true },
  coverImageUrl: { type: String, required: true },
  aboutProject: { type: String, required: true },
  aboutClient: { type: String, required: true },
  impact: { type: String, required: true },
  features: { type: String, reqired: true },
  challenges: { type: String, required: true },
  team: [
    {
      name: { type: String, required: true },
      role: { type: String, required: true },
    },
  ],
  featureImages: [
    {
      url: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project, projectSchema };
