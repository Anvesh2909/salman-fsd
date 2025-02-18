import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String, required: false },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    resetToken: { type: String, default: null },
    resetTokenExpires: { type: Date, default: null },
}, { timestamps: true });

const User = models.User || model('User', UserSchema);

export default User;