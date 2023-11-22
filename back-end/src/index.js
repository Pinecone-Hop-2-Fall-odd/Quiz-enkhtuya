import express from 'express';
import { userRouter } from './routes/user-routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);

const port = 8000;
app.listen(port, () => {
    console.log(`Your server running on: http://localhost:${port}`)
})
