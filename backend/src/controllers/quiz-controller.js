import { QuizModel } from "../models/quiz-model.js";

export const getAllQuizzes = async (req, res) => {
    const quizzes_data = await QuizModel.find({});
    res.status(200).json({ status: 'success', data: quizzes_data });
}

export const getQuiz = async (req, res) => {
    const filteredQuiz = await QuizModel.find({ _id: req.params.id });
    res.status(200).json({ status: 'success', data: filteredQuiz });
}

export const createQuiz = async (req, res) => {
    try {
        const body = req.body

        const newQuiz = await QuizModel.create({
            subjectName: body.subjectName,
            creator: body.creator,
            category: body.category,
            difficulty: body.difficulty,
            time: body.time,
            quiz: body.quiz
        });
        res.status(200).json({ status: 'success', data: { newQuiz } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error' });
    }
}

export const deleteQuiz = async (req, res) => {
    const body = req.body;
    const deletedData = await QuizModel.findOneAndDelete({ _id: req.params.id })
    res.status(200).json({ status: 'success', data: { deletedData } });
}