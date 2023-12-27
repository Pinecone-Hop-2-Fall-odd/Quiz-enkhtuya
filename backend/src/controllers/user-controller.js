import { UserModel } from "../models/user-model.js";
import bcrypt from 'bcrypt'

export const getAllUsers = async (req, res) => {
    const users_data = await UserModel.find({});
    res.status(200).json({ status: 'success', data: users_data })
}

export const getUser = async (req, res) => {
    const filteredUser = await UserModel.findOne({ _id: req.params.id });
    res.status(200).json({ status: 'success', data: filteredUser, });
}

export const createUser = async (req, res) => {
    try {
        const body = req.body;

        if (body.email === undefined) {
            res.status(403).json({ message: 'Email required' });
            return;
        } else if (body.password === undefined) {
            res.status(403).json({ message: 'Password required' });
            return;
        }

        console.log('password', req.body.password)
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = await UserModel.create({
            username: body.username,
            email: body.email,
            password: hashedPassword,
            createdOn: new Date(),
        });

        res.status(201).json({ status: 'success', data: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'aldaa garlaa' })
    }
}

export const updateUser = async (req, res) => {
    try {
        const body = req.body;

        console.log('password', req.body.password)
        const updatedPassword = await bcrypt.hash(req.body.password, 10)

        const editedUser = await UserModel.findByIdAndUpdate({ _id: req.params.id },
            {
                username: body.username,
                email: body.email,
                password: updatedPassword
            })

        res.status(200).json({ status: 'success', data: editedUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'aldaa garlaa' })
    }
}

export const deleteUser = async (req, res) => {
    const body = req.body;

    await UserModel.findOneAndDelete({ _id: req.params.id })
        .then(deletedData => {
            res.status(200).json({ status: 'success', data: deletedData })
        })
        .catch(error => res.json({ error }))
}


export const currentUser = async (req, res) => {
    const filteredUser = await UserModel.findOne({ _id: req.user.user_id });
    res.status(200).json({ status: 'success', data: filteredUser, });
}