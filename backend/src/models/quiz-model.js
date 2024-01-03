import mongoose from 'mongoose';

const singleQuiz = new mongoose.Schema({
    question: { type: String, required: [true, 'Quiz must have a question!'] },
    correctAnswer: { type: String, required: [true, 'Quiz must have a "correct answer"!'] },
    // incorrectAnswers: [{ type: String, required: true }, String, String]
    incorrectAnswers: { 0: { type: String, required: [true, 'Quiz must have an "incorrect answer"!'] }, 1: String, 2: String }
})

const quizSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required:[true, 'Quiz must have a "subject name"!']
    },
    category: { type: String, required: [true, 'Quiz must have a "category"!']},
    time: Number,
    difficulty: { type: String, required: [true, 'Quiz must have a "difficulty"!']},
    quiz: [singleQuiz],
    createdOn: Date,
});

export const QuizModel = mongoose.model("quiz", quizSchema);