import mongoose from 'mongoose';

const singleQuiz = new mongoose.Schema({
    question: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    incorrectAnswers: [{ type: String, required: true }, String, String]
})

const quizSchema = new mongoose.Schema({
    subjectName: String,
    creator: String,
    difficulty: String,
    time: Number,
    category: String,
    quiz: [singleQuiz],
    createdOn: Date,
});

export const QuizModel = mongoose.model("quiz", quizSchema);