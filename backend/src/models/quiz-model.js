import mongoose from 'mongoose';

const data = new mongoose.Schema({
    subjectName: String,
    creator: String,
    category: String,
    score: Number,
    quiz: [{ question: String, options: [{ answer: String, isCorrect: Boolean }] }],
    createdOn: Date,
});