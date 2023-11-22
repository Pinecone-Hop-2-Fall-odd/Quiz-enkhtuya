import express, { json } from 'express';
import fs from 'fs';
import { join } from 'path';

export const users = [
    {
        "id": 1,
        "username": "urje",
        "email": "urje12@gmail.com",
        "password": "kdsh",
    },
    {
        "id": 2,
        "username": "anujin",
        "email": "anujin3@gmail.com",
        "password": "kaaaaa",
    }
]

export const getAllUsers = (req, res) => {
    fs.readFile('./data/users.json', "utf-8", (readError, data) => {
        let savedData = JSON.parse(data);
        if (readError) {
            res.json({ status: 'read file error' })
        } else {
            res.status(200).json({
                status: 'success',
                data: savedData,
            })
        }
    })
}

export const getUser = (req, res) => {
    const id = req.params.id * 1;

    fs.readFile('./data/users.json', "utf-8", (readError, data) => {
        let savedData = JSON.parse(data);
        if (readError) {
            res.json({ status: 'read file error' })
        } else {
            const filteredUser = savedData.filter((val) => val.id === id);
            res.status(200).json({
                status: 'success',
                data: filteredUser,
            })
        }

    })
}

export const createUser = (req, res) => {
    const body = req.body;

    fs.readFile('./data/users.json', "utf-8", (readError, data) => {
        let savedData = JSON.parse(data);
        if (readError) {
            res.json({ status: 'read file error' })
        }

        const newUser = {
            "id": savedData.length + 1,
            "username": body.username,
            "email": body.email,
            "password": body.password,
        }

        savedData.push(newUser);

        fs.writeFile('./data/users.json', JSON.stringify(savedData), (writeError) => {
            if (writeError) {
                res.json({ status: 'error' })
            } else {
                res.status(201).json({ status: 'success', data: savedData })
            }
        });
    });
}

export const updateUser = (req, res) => {
    const body = req.body;
    const id = req.params.id * 1;

    fs.readFile('./data/users.json', "utf-8", (readError, data) => {
        let savedData = JSON.parse(data);
        if(readError) {
            res.json({ status: 'read file error'})
        }

        const editedUser = savedData.filter((user) => {
            if(user.id === id) {
                user.username = body.username
                user.email = body.email
                user.password = body.password

                return user
            } else {
                return user
            }
        });

        fs.writeFile('./data/users.json', JSON.stringify(editedUser), (writeError) => {
            if(writeError) {
                res.json({ status: 'error'})
            } else {
                res.status(200).json({ status: 'success', data: editedUser})
            }
        });

    })
}

export const deleteUser = (req, res) => {
    const body = req.body;
    const id = req.params.id * 1;
    fs.readFile('./data/users.json', "utf-8", (readError, data) => {
        let savedData = JSON.parse(data);
        if(readError) {
            res.json({ status: 'read file error'})
        }

        const deletedUser = savedData.filter((user) => user.id !== id);

        fs.writeFile('./data/users.json', JSON.stringify(deletedUser), (writeError) => {
            if(writeError) {
                res.json({ status: 'error'})
            } else {
                res.status(200).json({ status: 'success', data: deletedUser})
            }
        });
    });
}

