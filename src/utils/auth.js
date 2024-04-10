import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const SALT = 10
const createHash = async(data) => {
    let salt = await bcrypt.genSalt(SALT);
    let hash = await bcrypt.hash(data, salt);
    return hash;
}
const hashCompare = async (data,hash) => {
    return await bcrypt.compare(data,hash)
}
const createToken = async (payload) => {
    let token = await jwt.sign(payload, process.env.jwt_secret, {
        expiresIn: process.env.jwt_expiry
    })
    return token
}
const decodeToken = async (token) => {
    return await jwt.decode(token);
}
const authenticate = async (req, res, next) => {
    let token = req?.headers?.authorization?.split(" ")[1];
    if (token) {
        let payload = await decodeToken(token);
        let currentTime = +new Date();
        if (Math.floor(currentTime / 1000) < payload.exp) {
            next()
        } else {
            res.status(402).send({message: "Session Expired"})
        }
    } else {
        res.status(402).send({
            message: "Unauthorized Access"
        })
    }
}

export default {createHash, hashCompare, createToken, authenticate, decodeToken}