import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// login
export const loginUser = async (req, res) => {
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
        UserInfo: {
          username: foundUser.username,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
  }
};

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
