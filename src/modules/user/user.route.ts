import express from 'express'
import { userController } from './user.controllerl'
const route = express.Router()

route.post('/', userController.createUser)

route.get('/', userController.getAlllUser)

route.get('/:userId', userController.getSingleUser)

route.put('/:userId', userController.updateUser)

route.delete('/:userId', userController.deleteUser)

// orders
route.put('/:userId/orders', userController.createUserOrders)

export const userRoute = route
