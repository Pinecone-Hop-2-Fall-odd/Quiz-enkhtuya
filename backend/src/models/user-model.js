import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    createdOn: Date,
});

export const UserModel = mongoose.model("user", userSchema);