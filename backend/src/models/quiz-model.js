import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    subjectName: String,
    creator: String,
    category: String,
    quiz: [{ question: String, options: [{ answer: String, isCorrect: Boolean }] }],
    createdOn: Date,
});

export const QuizModel = mongoose.model("quiz", quizSchema);