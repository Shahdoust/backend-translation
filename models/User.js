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
    {
      fromLanguage: [String],
      toLanguage: [String],
      inputText: [String],
      outputText: [String],
    },
  ],
});
export default mongoose.model("User", userSchema);
