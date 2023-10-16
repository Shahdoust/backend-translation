import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import colors from "colors";
import connectDB from "./db/dbinit.js";
import userRouter from "./routes/user.js";
import textTranslateRouter from "./routes/deepL.js";
//import translation from "./routes/Translation.js";

connectDB();

const app = express();

// app.use(
//   cors({ origin: `${process.env.FRONTEND_CONNECTION}`, credentials: true })
// );
app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8000;

app.use("/user", userRouter);
//app.use("/translation", translation);
app.use("/translate", textTranslateRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.rainbow);
});
