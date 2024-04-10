import mongoose from "./index.js";

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String
    },
    projectType: {
        type: Number
    },
    clientName: {
        type: String
    },
    projectStatus: {
        type: Number
    },
    projectTimeline: {
        type: Number
    },
    projectBudget: {
        type: String
    },
    projectArea: {
        type: String
    },
    buildUpArea: {
        type: String
    },
    buildUpType: {
        type: Number
    },
    category: {
        type: Number
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
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
}, {
    collection: 'project',
    versionKey: false
})

const ProjectModel = mongoose.model('project', ProjectSchema)

export default ProjectModel