import { QuizModel } from "../models/quiz-model";

export const getAllQuizzes = async (req, res) => {
    const quizzes_data = await QuizModel.find({});
    res.status(200).json({status: 'success', data: quizzes_data});
}

export const getQuiz = async (req, res) => {
    const filteredQuiz = await QuizModel.find({ _id: req.params.id});
    res.status(200).json({status: 'success', data: filteredQuiz});
}

export const createQuiz = async (req, res) => {
    const body = req.body

    const newQuiz = await QuizModel.create({
        subjectName: body.subjectName,
        creator: body.creator,
        category: body.category,
        quiz: [{ question: body.question, options: [{ answer: body.answer, isCorrect: body.isCorrect}]}]
    })
}