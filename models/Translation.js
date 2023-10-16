import mongoose from "mongoose";

const translationSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  originText: {
    type: String,
  },
  translateText: {
    type: String,
  },
  // originLanguage: {
  //   type: String,
  //   required: [true, "from Language is required"],
  // },
  targetLanguage: {
    type: String,
    required: [true, "to Language is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Translation", translationSchema);
