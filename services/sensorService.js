import mongoose from 'mongoose'
import componentModel from "../models/componentModel.js"
import { MESSAGE_TYPES } from "../utils/constant.js"

const handleUpdate = async (id, name, data) => {
    const vesselId = new mongoose.Types.ObjectId(id)
    const newNotification = {
        messageType: MESSAGE_TYPES.INFO,
        content: data,
    }
    await componentModel.updateOne({vessel: vesselId, name: name},{currentData: data, $push:{ notifications: newNotification}})
    console.log('update successfully end')
}

export default handleUpdate;