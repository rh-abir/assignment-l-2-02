import express, { Router } from 'express'
import { userControllers } from './user.controllerl'

const router: Router = express.Router()

router.post('/', userControllers.createUser)

router.get('/', userControllers.getAllUser)

router.get('/:userId', userControllers.getSingleUser)

router.put('/:userId', userControllers.updateUser)

router.delete('/:userId', userControllers.deleteSingleUser)

router.put('/:userId/orders', userControllers.createOrder)

router.get('/users/:userId/orders', userControllers.getAllOrderASpecificUser)

export const userRoutes = router
