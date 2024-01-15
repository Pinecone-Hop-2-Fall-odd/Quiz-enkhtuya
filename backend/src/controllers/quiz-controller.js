import { QuizModel } from "../models/quiz-model.js";
import { UserModel } from "../models/user-model.js";

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
            category: body.category,
            difficulty: body.difficulty,
            time: body.time,
            quiz: body.quiz
        });
        res.status(200).json({ status: 'success', data: { newQuiz } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

export const deleteQuiz = async (req, res) => {
    const body = req.body;
    const deletedData = await QuizModel.findOneAndDelete({ _id: req.params.id })
    res.status(200).json({ status: 'success', data: { deletedData } });
}

export const checkQuiz = async (req, res) => {
    const { selectedAnswer, username } = req.body;
    const questionNum = selectedAnswer.length;
    const { passedQuiz, _id } = await UserModel.findOne({ username })
    let isPassed = false;
    let sum = 0;
    try {
        selectedAnswer.forEach((obj) => {
            if (obj.selected === obj.correctAnswer) {
                isPassed = true
                sum = sum + 1
            }
        });
        if (isPassed && sum > questionNum / 2) {
            await UserModel.findByIdAndUpdate({ _id: _id }, { passedQuiz: passedQuiz + 1 })
            res.status(200).json({ message: "success", score: `${sum}/${questionNum}` });
        } else {
            return res.status(400).json({ message: "failed", score: `${sum}/${questionNum}` });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }
}