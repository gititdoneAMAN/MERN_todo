const express = require("express");
const zod = require("zod");
const { signupSchema, signinSchema } = require("../type");
const bcrypt = require("bcrypt");
const { User } = require("../db");
const jwt = require("jsonwebtoken");

const router = express.Router();

// ------------SIGNUP-route--------------//

router.post("/signup", async (req, res) => {
  const payload = req.body;
  const parsedPayload = signupSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "Invalid Input" });
  } else {
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const userData = await User.create({
      username: payload.username,
      password: hashedPassword,
      firstname: payload.firstname,
      lastname: payload.lastname,
    });

    const token = jwt.sign(payload.username, process.env.JWT_SECRET);
    res.json({
      msg: "User Added Successfully!",
      token: token,
    });
  }
});

// ------------SIGNIN-route--------------//

router.post("/signin", async (req, res) => {
  const payload = req.body;
  const parsedPayload = signinSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "Invalid credentials" });
  } else {
    const userData = await User.findOne({ username: payload.username });

    if (!userData) {
      return res.status(404).json({ msg: "User not found." });
    } else {
      const token = jwt.sign(payload.username, process.env.JWT_SECRET);
      res.status(200).json({
        msg: "Success",
        token: token,
      });
    }
  }
});

module.exports = router;
