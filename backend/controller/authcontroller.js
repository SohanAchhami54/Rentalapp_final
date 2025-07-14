
//this function gets executed whenever the user request the user registration routes.
//const { validationResult, check } = require("express-validator");
import bcrypt from 'bcrypt';
const User = require('../models/User');
export const PostSignUp = async (req, res) => {
    try {
        const { firstname, lastname, usertype, email, password } = req.body;//req.body ma chai yesko input value haru aauxa.
        if (!firstname || !usertype || !email || !password.length < 8) {
            return res.json({ success: false, message: 'Fill all the field' });
        }


        const userExists = User.findOne({ email })
        if (userExists) {
            return res.json({ success: false, message: 'User already exists' });
        }

        const hashedpassword =await bcrypt.hash(password, 12);
        const user=new User({firstname,lastname,usertype,email,password:hashedpassword});
        await user.save();


    } catch (err) {
          
    }
}
