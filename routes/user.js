import { Router } from "express";
import * as userController from "../controllers/userController.js";

const userRouter = Router();

// get user (dashboard?)
userRouter.get("/:username", userController.getUser);

// login user
userRouter.post("/login", userController.loginUser);

// register user
userRouter.post("/register", userController.registerUser);

export default userRouter;
