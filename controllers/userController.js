import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// login
export const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const foundUser = await User.findOne({ username });
  if (!foundUser) return res.sendStatus(404);

  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    const accessToken = jwt.sign(
      {
        username: foundUser.username,
      },
      process.env.ACCESS_TOKEN_SECRET
    );
  }
  res.cookie("accessToken", token, { httpOnly: true, maxAge: 1800000 }); // 30min
  res.status(200).send({ status: "success" });
});

// get user
export const getUser = (req, res) => {
  const { username } = req.params.username;
  try {
    if (username) {
      res.status(200).json(username);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// register
export const registerUser = asyncHandler(async (req, res, next) => {
  /*
    Check if user exists (username)
        - If user exists, return an Error (already exists)
        - If user doesn't exist:
            - Secure the pw with bcrypt
            - Store the user in DB
            - Sign a token
            - Return the token
*/
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser)
    throw new ErrorResponse(
      "An account with this Username already exists",
      409
    );

  // const hash = await bcrypt.hash(password, 10);
  // const newUser = await User.create({
  //   username,
  //   password: hash,
  // });

  const newUser = await User.create({
    username,
    password: password,
  });

  const token = jwt.sign({ uid: newUser._id }, process.env.ACCESS_TOKEN_SECRET);

  res.status(201).send({ status: "success" });
});

export const logoutUser = async (req, res, next) => {
  return res
    .clearCookie("accessToken")
    .status(200)
    .json({ message: "Successfully logged out" });
};
