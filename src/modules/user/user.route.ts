import express from 'express'
import { userController } from './user.controllerl'
const route = express.Router()

route.post('/', userController.createUser)
route.get('/', userController.getAlllUser)
route.get('/:userId', userController.getSingleUser)

export const userRoute = route
