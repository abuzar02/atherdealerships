import mongoose from "mongoose";

const dbConnect = async () => {
  try {
   
    if (mongoose.connection.readyState >= 1) return;

   
    await mongoose.connect(process.env.Db_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error);
  }
};

export default dbConnect;
