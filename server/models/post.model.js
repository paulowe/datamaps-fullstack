const mongoose = require("mongoose");
const { projectSchema } = require("./project.model");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  semesterName: { type: String, required: true, unique: true },
  projects: [projectSchema]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
