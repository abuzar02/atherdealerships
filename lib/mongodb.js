import mongoose from "mongoose";

const dbConnect = async () => {
    // Check if Mongoose is already connected or connecting
    if (mongoose.connection.readyState >= 1) {
        // If connected (1) or connecting (2), return and skip the connection attempt
        return;
    }

    try {
        // Attempt to connect to the database
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

export default dbConnect;
