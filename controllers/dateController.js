import DateModel from '../models/dateModel.js'

const createCalendarRecord = async (req, res) => {
    const newDate = await DateModel.create(req.body)
    res.status(StatusCodes.OK).json({ newDate });
}

const getAllCalendarRecords = async (req, res) => {
    const allOccDates = await DateModel.find()
    res.status(StatusCodes.OK).json({ allOccDates });
}

export {createCalendarRecord, getAllCalendarRecords}