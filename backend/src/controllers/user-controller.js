import { UserModel } from "../models/user-model.js";

export const getAllUsers = async (req, res) => {
    const users_data = await UserModel.find({});
    res.status(200).json({ status: 'success', data: users_data})
}

export const getUser = async (req, res) => {
    const filteredUser = await UserModel.find({ _id: req.params.id});
    res.status(200).json({ status: 'success', data: filteredUser,});
}

export const createUser = async (req, res) => {
    const body = req.body;

    const newUser = await UserModel.create({
        username: body.username,
        email: body.email,         
        password: body.password,
        createdOn: new Date(),
    });

    res.status(201).json({ status: 'success', data: newUser });
}

export const updateUser = async (req, res) => {
    const body = req.body;

    const editedUser = await UserModel.findByIdAndUpdate({ _id: req.params.id}, 
        {                 
        username : body.username,
        email :  body.email,
        password : body.password 
        })

    res.status(200).json({ status: 'success', data: editedUser});
}

export const deleteUser = async (req, res) => {
    const body = req.body;

    await UserModel.findOneAndDelete({ _id: req.params.id })
    .then(deletedData => {
        res.status(200).json({ status: 'success', data: deletedData})
    })
    .catch(error => res.json({ error}))
}
