import { Schema } from "mongoose";
import mongoose from "./index.js";


const planSchema = new mongoose.Schema({
    planImageName: {
        type: String
    },
    planDesc: {
        type: String
    },
    planImage: {
        type: String
    }
}, {
    collection: 'plan',
    versionKey: false
})

const planModel = mongoose.model('plan', planSchema);

export default planModel;