const router = require("express").Router();
const Posts = require("../models/post.model");
const multer = require("multer");
const _ = require("underscore");
const fs = require("fs");
const vm = require("v-response");
const { upload } = require("../utils/image-helper");
const auth = require("../middleware/auth");

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

let multerUpload = multer({
  storage: storage,
});

// on the front end, upload the image first, and put the resulting url
// inside the project object
router.post("/new", auth, async (req, res) => {
  const semesterName = req.body.semesterName;
  const projects = req.body.projects;

  const newPost = new Posts({
    semesterName,
    projects,
  });

  try {
    await newPost.save();
    res.json({ status: "200", message: "Post has been succesfully posted." });
  } catch (err) {
    res.json({ status: "400", error: err });
  }
});

router.delete("/:name", auth, async (req, res) => {
  const semesterName = req.params.name;
  try {
    await Posts.findOneAndDelete({ semesterName });

    res.json({ status: "200", message: "Post has been succesfuly deleted." });
  } catch (err) {
    res.json({ status: "400", error: err });
  }
});

router.get("/", async (req, res) => {
  const data = await Posts.find();
  res.send(data);
});

// get one project based on its id
router.get("/:id", async (req, res) => {
  const allPosts = await Posts.find();

  const projectId = req.params.id;

  let targetPost;

  allPosts.forEach((post) => {
    const projects = post.projects;
    projects.forEach((project) => {
      if (project._id == projectId) {
        targetPost = project;
      }
    });
  });

  if (targetPost) {
    res.status(200).json(targetPost);
  } else {
    res.status(400).json({ message: "post does not exist." });
  }
});

// upload multiple images and return their url
router.post(
  "/uploadImages",
  auth,
  multerUpload.array("multiple-images"),
  async (req, res, next) => {
    if (!req.files || _.isEmpty(req.files)) {
      return res
        .status(400)
        .json(vm.ApiResponse(false, 400, "No file uploaded'"));
    }
    const files = req.files;

    try {
      let urls = [];
      let multiple = async (path) => await upload(path);
      for (const file of files) {
        const { path } = file;

        const newPath = await multiple(path);
        urls.push(newPath);
        fs.unlinkSync(path);
      }
      if (urls) {
        return res.status(200).json({ urls: urls });
      } else {
        return res.status(400).json(vm.ApiResponse(false, 400, ""));
      }
    } catch (err) {
      return res.json({ status: "400", error: err });
    }
  }
);

module.exports = router;
