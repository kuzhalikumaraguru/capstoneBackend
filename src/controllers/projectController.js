import ProjectModel from "../models/projectModels.js";
const createProject = async (req, res) => {
    try {
        let project = await ProjectModel.create(req.body);
        res.status(200).send({message: 'Project created successfully'})
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}
const getAllProjects = async (req, res) => {
    try {
        let projects = await ProjectModel.find({});
        res.status(200).send({ message: "Data Fetched Successfully", projects })
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}
const deleteProject = async (req, res) => {
    try {
        const project_id = req.params.id;
        const result = await ProjectModel.deleteOne({ _id: project_id });
        if (result.deletedCount === 1) {
            res.status(200).send({ message: "Project Deleted Successfully" });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
}

const editProject = async (req, res) => {
    try {
        const projectById = req.params.id;
        const project = await ProjectModel.findOne({ _id: projectById }, {_id:0});
        if (project) {
            res.status(200).send({ message: "Data Fetched Successfully", project});
        }
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
}
const editProjectById = async (req, res) => {
    try {
        const project = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({message: "Data Updated Successfully"})
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
}

export default {createProject , getAllProjects, deleteProject, editProject, editProjectById}