import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user-controller.js';
import { login } from '../controllers/login-controller.js';
import { verifyToken } from '../middlewares/auth.js';

export const userRouter = express.Router();

userRouter.get('/users', verifyToken, getAllUsers);
userRouter.get('/user/:id', verifyToken, getUser);
userRouter.post(`/user`, createUser);
userRouter.post(`/login`, login);
userRouter.patch('/user/:id', updateUser);
userRouter.delete('/user/:id', deleteUser);