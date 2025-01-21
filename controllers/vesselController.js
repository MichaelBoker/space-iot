import { StatusCodes } from 'http-status-codes';
import Vessel from '../models/vesselModel.js'

const getVessel = async (req,res) => {
    const {id} = req.params;

    const vessel = await Vessel.findById(id)
    req.status(StatusCodes.OK).json({vessel})
}

const createVessel = async (req,res) => {
    const vessel = await Vessel.create(req.body)
    res.status(StatusCodes.CREATED).json({ msg: "Vessel created", vessel: vessel });
}

export {getVessel, createVessel}