import express from 'express';
import { getQuiz, getAllQuizzes, deleteQuiz, createQuiz } from '../controllers/quiz-controller.js';

export const quizRouter = express.Router();

quizRouter.get('/quizzes', getAllQuizzes);
quizRouter.get('/quiz/:id', getQuiz);
quizRouter.post(`/quiz`, createQuiz);
quizRouter.delete('/quiz/:id', deleteQuiz);