import express from 'express'
import { userController } from './user.controllerl'
const route = express.Router()

route.post('/', userController.createUser)

export const userRoute = route
