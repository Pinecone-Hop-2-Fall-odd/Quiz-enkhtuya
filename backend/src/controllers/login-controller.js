import { UserModel } from '../models/user-model.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
   const body = req.body;

   if (body.email === undefined) {
      res.status(403).json({ message: 'Email required' });
      return;
   } else if (body.password === undefined) {
      res.status(403).json({ message: 'Password required' });
      return;
   }

   const filteredUser = await UserModel.findOne({ email: body.email });

   if (!filteredUser) {
      res.status(405).json({ message: 'User not found' })
   } else {
      if (await bcrypt.compare(body.password, filteredUser.password)) {
         // jwt
         const token = jwt.sign(
            { user_id: filteredUser._id, email: filteredUser.email },
            "PrivateKey",
            { expiresIn: "2h", }
         );

         res.status(200).json({token});
         return;
      } else {
         res.status(401).json({ message: 'Password not match' })
         return;
      }
   }
}