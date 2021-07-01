const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { User, validateSignup, validateLogin } = require("../models/user.model");
const auth = require("../middleware/auth");

// user signup
router.post("/signup", async (request, response) => {
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const email = request.body.email;
  const password = request.body.password;

  // validate data
  const { error } = validateSignup(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  // check registered or not?
  let user = await User.findOne({ email: email });
  if (user) return response.status(400).send("User already registered");

  const newUser = new User({
    firstName,
    lastName,
    email,
    password
  });

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(password, salt);
  await newUser.save();

  response.send("User created!");
});

// user login
router.post("/login", async (request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  // validate data
  const { error } = validateLogin(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: email });
  if (!user) {
    return response
      .status(400)
      .send({ error: "Either email or password is incorrect" });
  }

  const valid = bcrypt.compare(password, user.password);
  if (!valid) {
    return response
      .status(400)
      .send({ error: "Either email or password is incorrect" });
  }

  // generate token here
  const accessToken = user.generateAccessToken(user._id);

  response.cookie("access-token", accessToken);

  response.send("Login success");
});

// logout (invalidate token)
router.get("/logout", auth, async (_, response) => {
  response.clearCookie("access-token");
  response.send("Token invalidated");
});

// who am i
router.get("/me", auth, async (request, response) => {
  const user = await User.findById({ _id: request.userId }).select("-password");
  response.send(user);
});

module.exports = router;
