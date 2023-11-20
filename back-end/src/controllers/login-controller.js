import { users } from "./user-controller.js";

export const login = (req, res) => {
 const body = req.body;

 if(body.email === undefined) {
    res.status(403).json({ message: 'Email required'});
    return;
 }

 if(body.password === undefined) {
    res.status(403).json({ message: 'Password required'});
    return;
 }

 const filteredUser = users.filter((val) => val.email === body.email);

 if(filteredUser.length === 0) {
    res.status(405).json({ message: 'User not found'})
 } else {
    const user = filteredUser[0];
    if(user.password === body.password) {
        res.status(200).json({ status: 'success', data: { user }});
    } else {
        res.status(405).json({ message: 'Password not match'})
        return;
    }
 }
}