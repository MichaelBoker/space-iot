import { Router } from "express";
import { createCalendarRecord, getAllCalendarRecords } from "../controllers/dateController.js";

const router = Router()
router.route('/').get(getAllCalendarRecords).post(createCalendarRecord)

export default router;