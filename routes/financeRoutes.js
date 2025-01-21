import express from 'express'
import {getFinance,getRecord,addRecord} from '../controllers/financeController.js'

const router = express.Router()

router.route('/').get(getFinance).post(addRecord)
router.route('/:id').get(getRecord)

export default router
