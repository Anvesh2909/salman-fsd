import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export default async function connect() {
    try {
        // eslint-disable-next-line no-undef
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Connected to MongoDB');
        });

        connection.on('error', (error) => {
            console.error('Error connecting to MongoDB:', error);
        });

        connection.on('disconnected', () => {
            console.warn('MongoDB connection disconnected');
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        // eslint-disable-next-line no-undef
        process.exit(1); // Exit process with failure
    }
}