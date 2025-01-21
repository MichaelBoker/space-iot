import express from 'express'
import { getUser, updateUser } from '../controllers/accountController.js'

const router = express.Router()

router.route('/').get(getUser).patch(updateUser)

export default router