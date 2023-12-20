import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, required: true },
    createdOn: Date,
});

export const UserModel = mongoose.model("user", userSchema);