import UserModel from "../models/userModels.js"
import Auth from '../utils/auth.js';
import emailService from "../utils/emailService.js";
import jwt from 'jsonwebtoken';
//fetch the user details once the user is logging in after sign up
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await UserModel.findOne({ email: email })// check email is exists
        if (user) { // if exist, compare password and send token for authentication
            if (await Auth.hashCompare(password, user.password)) {
                //create token
                const token = await Auth.createToken({
                    name: user.name,
                    email: user.email,
                    role: user.role
                })
                res.status(200).send({
                    message: "Login Successful",
                    token,
                    role: user.role,
                    id: user._id
                })
            }
            else {
                res.status(400).send({
                    message: "Incorrect Password"
                })
            }
        } else {
            res.status(400).send({
                message: `User with ${req.body.email} does not exists`
            })
        }
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}
//create user when user is signing up
//save the user details 
const createUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email }) //to check whether user is exist while create
        if (!user) { //if new user , hash the password for encryption
            req.body.password = await Auth.createHash(req.body.password);
            let newuser = await UserModel.create(req.body); // create data in db;
            res.status(201).send({message: 'User created successfully'})
        } else {
            res.status(400).send({message: `${req.body.email} already exists`})
        }
    } catch (error) {
        res.status(500).send({message: "Internal Server Error", error: error.message})
    }
}

const getAllUsers = async (req, res) => {
    try {
        let users = await UserModel.find({}, { password: 0 })
        res.status(200).send({
            message: "User Data Fetched Successfully",
            users
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        let user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).send({message: `${req.body.email} is not valid registered email`})
        } else {
             const token = await Auth.createToken({
                    name: user.name,
                    email: user.email,
                    role: user.role
             })
            await emailService.passwordResetMail(email, user.name, token);
            res.status(201).send({message: 'Please check your mail. Mail Sent Successfully'})
        }
    } catch (error) {
         res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}
const setNewPassword = async (req, res) => {
    try {
        // let token  = req.params.token;
        let payload = await jwt.decode(req.params.token);
        let isTokenValid = await UserModel.findOne({ email: payload.email });
        req.body.newPassword = await Auth.createHash(req.body.newPassword);
        if (isTokenValid) {
            const filter = { email: payload.email };
            const update = { $set: { password: req.body.newPassword } };
            await UserModel.findOneAndUpdate(filter, update);
            res.status(201).send({ message: "Password Updated Successfully" });
        } else {
            res.status(404).send({message: "Invalid Token"})
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}
const editUser = async (req, res) => {
    try {
        let user = await UserModel.findOne({ _id: req.params.id }, { _id: 0 });
        if (user) {
            res.status(200).send({message: "Data Fetched Successfully", user})
        }
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
}
const editUserById = async (req, res) => {
    try {
        let user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).send({ message: "Data Updated Successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
}
const deleteUser = async (req, res) => {
    try {
        const result = await UserModel.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 1) {
            res.status(200).send({ message: "User Deleted Successfully" });
        }  
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
}
export default {
    login, createUser, getAllUsers, forgetPassword, setNewPassword, editUser, editUserById, deleteUser
}