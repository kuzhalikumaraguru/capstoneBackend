import mongoose from "./index.js";


const materialSchema = new mongoose.Schema({
    materialType: {
        type: Number
    },
    packageStatus: {
        type: Number
    },
    materialsList: [{
        name: String,
        content: String,
        id: Number
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }

}, {
    collection: 'material',
    versionKey: false
})


const MaterialModel = mongoose.model('material', materialSchema);

export default MaterialModel;