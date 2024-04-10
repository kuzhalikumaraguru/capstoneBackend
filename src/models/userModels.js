import mongoose from "./index.js";

const validateEmail = (email) => {
    return String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        validate: {
            validator: validateEmail,
            message: props => `${props.value} is not valid email`
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    userType: {
        type: Number,
        default: 1
    },
    status: {
        type: Number,
        default: 1
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
}, {
        collection: 'user',
        versionKey: false
    }
)

const UserModel = mongoose.model('user', UserSchema)

export default UserModel