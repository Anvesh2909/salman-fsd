import express from "express";
import connect from "../database.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js"; // Import the existing generateToken function
import cookieParser from "cookie-parser";

import User from "./models/user.js"; // Assuming the user model is in "models/user.js"

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
connect();

// Sign-Up Route
app.post("/api/sign-up", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password and create user
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        // Generate token using the existing generateToken function
        const token = generateToken({ id: newUser._id }, process.env.JWT_SECRET);

        // Set token in cookie
        res.cookie("token", token, { httpOnly: true });
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Login Route
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Generate token using the existing generateToken function
        const token = generateToken({ id: user._id }, process.env.JWT_SECRET);

        // Set token in cookie
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
