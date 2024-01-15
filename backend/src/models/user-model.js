import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'Please provide username']},
    email: { type: String, unique: true, required: [true, 'Please provide an email'], validate: [validator.isEmail, 'Please provide a valid email'] },
    password: { type: String, required: [true, 'Please provide a password'], minlength: 7 },
    image: String,
    createdOn: Date,
    passedQuiz: {type: Number, default: 0}
});

export const UserModel = mongoose.model("user", userSchema);