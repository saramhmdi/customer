import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGO_URI);
  mongoose.set("strictPopulate" ,false)
  console.log("connect to database");
}
export default connectDB;
