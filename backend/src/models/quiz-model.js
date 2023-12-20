import mongoose from 'mongoose';

const singleQuiz = new mongoose.Schema({
    question: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    // incorrectAnswers: [{ type: String, required: true }, String, String]
    incorrectAnswers: { 0: { type: String, required: true }, 1: String, 2: String }
})

const quizSchema = new mongoose.Schema({
    subjectName: String,
    category: { type: String, required: true},
    time: Number,
    difficulty: { type: String, required: true},
    quiz: [singleQuiz],
    createdOn: Date,
});

export const QuizModel = mongoose.model("quiz", quizSchema);