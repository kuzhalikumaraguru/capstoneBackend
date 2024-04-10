import MaterialModel from '../models/materialModels.js';
const createMaterial = async (req, res) => {
    try {
        let material = await MaterialModel.create(req.body);
        res.status(201).send({ message: 'Material created successfully' });
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}

const getAllMaterial = async (req, res) => {
    try {
        let materials = await MaterialModel.find({});
        res.status(200).send({ message: 'Fetched successfully' , materials});
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}

const deleteMaterial = async (req, res) => {
    try {
        let material = await MaterialModel.deleteOne({_id : req.params.id});
        if (material.deletedCount === 1) {
            res.status(200).send({ message: "Material Deleted Successfully" });
        }
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}
const getMaterialById = async (req, res) => {
    try {
        let material = await MaterialModel.findOne({ _id: req.params.id });
        res.status(200).send({message:"Fetched Successfully", material})
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}
const editMaterialById = async (req, res) => {
    try {
        let material = await MaterialModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).send({message: "Data Updated Successfully"})
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}
export default {createMaterial, getAllMaterial, deleteMaterial, getMaterialById, editMaterialById}