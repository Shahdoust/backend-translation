import { Router } from "express";
import * as textTranslator from "../controllers/deepLController.js";

const textTranslateRouter = Router();

// get translation from deepL
textTranslateRouter.post("/", textTranslator.textTranslator);

export default textTranslateRouter;
