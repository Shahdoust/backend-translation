import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  accessToken: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  last_translations: [
    { fromLanguage: "", toLanguage: "", inputText: "", outputText: "" },
  ],
});
export default mongoose.model("User", userSchema);
