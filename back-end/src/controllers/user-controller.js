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
    res.status(200).json({ 
        status: 'success',
        data: { users },
})
}

export const getUser = (req, res) => {
    const id = req.params.id * 1;

    const filteredUser = users.filter((el) => el.id === id);
    res.status(200).json({
        status: 'success',
        data: { filteredUser },
    })
}

export const createUser = (req, res) => {
    const body = req.body;

    const newUser = {
        "id": users.length + 1,
        "username": body.username,
        "email": body.email,
        "password": body.password,
    }

    users.push(newUser);

    res.status(200).json({
        status: 'success',
        data: { users },
    })
}