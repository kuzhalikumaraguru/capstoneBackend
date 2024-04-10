import planModel from "../models/planModel.js"

const createPlan = async (req, res) => {
    try {
        let plan = await planModel.create(req.body);
        res.status(201).send({ message: 'Plan Created' });
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}
const getAllPlan = async (req, res) => {
    try {
        let plans = await planModel.find({});
        res.status(200).send({message: 'Plan Fetched', plans})
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}
const getPlanById = async (req, res) => {
    try {
        let plan = await planModel.findOne({ _id: req.params.id });
        res.status(200).send({ message: 'Data Fetched', plan });
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}

const editPlanById = async (req, res) => {
    try {
        let plan = await planModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).send({ message: 'Updated Successfully' });
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}

const deletePlanById = async (req, res) => {
    try {
        let plan = await planModel.deleteOne({ _id: req.params.id });
        res.status(200).send({ message: 'Deleted Successfully' });
    } catch (error) {
        res.status(500).send({
            message:error.message
        }) 
    }
}
export default { createPlan, getAllPlan, getPlanById, editPlanById, deletePlanById }