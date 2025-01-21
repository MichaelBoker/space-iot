import express from 'express'
import { createVessel, getVessel } from '../controllers/vesselController.js'

const router = express.Router()
router.route("/").post(createVessel)
router.route("/:id").get(getVessel)

export default router