import express from "express";
import cors from "cors";
import colors from "colors";
import connectDB from "./db/dbinit.js";

connectDB();

const app = express();

app.use(
  cors({ origin: `${process.env.FRONTEND_CONNECTION}`, credentials: true })
);

app.use(express.json(express.json()));

app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.rainbow);
});
