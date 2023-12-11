import express from 'express';
import { userRouter } from './routes/user-routes.js';
import cors from 'cors';
import mongoose from 'mongoose';
import { quizRouter } from './routes/quiz-routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(quizRouter);

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://enkhe:20050511131Enkhe@cluster0.knivtsw.mongodb.net/');
    console.log('db connected');
}

connectDB();

const port = 8000;
app.listen(port, () => {
    console.log(`Your server running on: http://localhost:${port}`)
})
