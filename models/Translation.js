import mongoose from "mongoose";

const translationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  fromLanguage: {
    type: String,
    required: [true, "from Language is required"],
  },
  toLanguage: {
    type: String,
    required: [true, "to Language is required"],
  },
  inputText: {
    type: String,
  },
  outputText: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Translation", translationSchema);
