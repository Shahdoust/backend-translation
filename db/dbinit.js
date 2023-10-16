import mongoose from "mongoose";

export const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDb connected: ${conn.connection.name}`.underline.cyan);
};
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.log(error.stack);
//   });

export default connectDB;
