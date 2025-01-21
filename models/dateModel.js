import mongoose from "mongoose";

const DateRecordSchema = new mongoose.Schema({
    title: {type: String, required: true},
    name: {type: String, required: true},
    dateFrom: {type: Date, required: true},
    DateTo: {type: Date, required: true},
})

export default mongoose.model("DateRecord", DateRecordSchema)