import express from 'express';
import { getQuiz, getAllQuizzes, deleteQuiz, createQuiz, checkQuiz } from '../controllers/quiz-controller.js';
import { verifyToken } from '../middlewares/auth.js';

export const quizRouter = express.Router();

quizRouter.get('/quizzes', verifyToken, getAllQuizzes);
quizRouter.get('/quiz/:id', getQuiz);
quizRouter.post(`/quiz`, createQuiz);
quizRouter.post(`/quiz/:id`, checkQuiz);
quizRouter.delete('/quiz/:id', deleteQuiz);