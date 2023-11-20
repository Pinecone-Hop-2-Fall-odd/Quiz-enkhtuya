import express from 'express';
import fs from 'fs';
import { userRouter } from './routes/user-routes.js';

const app = express();

// app.use(cors());
app.use(express.json());

app.use(userRouter);

const port = 8000;
app.listen(port, () => {
    console.log(`Your server running on: http://localhost:${port}`)
})