const cloudinary = require("cloudinary");
const _ = require("underscore");
const Q = require("q");
require("dotenv").config({ path: "../.env" });

const upload = file => {
  const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
  const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
  });

  return new Q.Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(file, (err, res) => {
      if (err) {
        console.log("cloudinary err:", err);
        reject(err);
      } else {
        console.log("cloudinary res:", res);
        return resolve(res.url);
      }
    });
  });
};

module.exports = { upload };
