import mongoose from 'mongoose'
import Component from '../models/componentModel.js'
import { ERRORS_MAP } from './handlers/index.js'

const startAnalysis = async (message,id) => {
    const vesselId = new mongoose.Types.ObjectId(id)
    const vesselData = await Component.find({vessel:vesselId})
    const report = {
        reportErrorID : message.error,
        date: Date.now().toLocaleString(),
        errorLogs: []
    }
    message.vesselData = createDataMap(vesselData);
    message.report = report;
    
    const response = ERRORS_MAP[message.error].handleRequest(message)
    console.log(JSON.stringify(response.report))
}

const createDataMap = (vesselData) => {
    const map = vesselData.reduce((data,component) => data.set(toCamelCase(component.name),component),new Map())
    return Object.fromEntries(map.entries())

}

const toCamelCase = str => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');

export { startAnalysis }