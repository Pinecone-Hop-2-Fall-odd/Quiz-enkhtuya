import { UserModel } from '../models/user-model.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'


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

         const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
               user: 'enkhtuya.b2051@gmail.com',
               pass: 'xzdw koit uffg otpr'
            }
         });

         const mailOptions = {
            from: 'enkhtuya.b2051@gmail.com',
            to: filteredUser.email,
            subject: 'Email verification',
            text: `${Date.now()}`
         };

         transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
               console.log(error);
            } else {
               console.log('Email sent: ' + info.response);
               // do something useful
            }
         });

         res.status(200).json({ token });
         return;
      } else {
         res.status(401).json({ message: 'Password not match' })
         return;
      }
   }
}