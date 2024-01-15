import mongoose from 'mongoose';

const singleQuiz = new mongoose.Schema({
    question: { type: String, required: [true, 'Quiz must have a question!'] },
    correctAnswer: { type: String, required: [true, 'Quiz must have a "correct answer"!'] },
    incorrectAnswers: { 0: { type: String, required: [true, 'Quiz must have an "incorrect answer"!'] }, 1: String, 2: String }
})

const quizSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: [true, 'Quiz must have a "subject name"!']
    },
    category: {
        type: String, required: [true, 'Quiz must have a "category"!'],
        enum: { values: ['Science', 'Art & Humanities', 'Other', 'Languages', 'Social Science'] }
    },
    time: Number,
    difficulty: {
        type: String, required: [true, 'Quiz must have a "difficulty"!'],
        enum: {
            values: ['easy', 'medium', 'hard'],
            message: 'Difficulty is either easy, medium, hard!'
        }
    },
    quiz: [singleQuiz],
    creator: String,
    createdOn: Date,
});

export const QuizModel = mongoose.model("quiz", quizSchema);