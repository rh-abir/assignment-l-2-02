import express, { Router } from 'express'
import { userControllers } from './user.controllerl'

const router: Router = express.Router()

router.post('/', userControllers.createUser)

router.get('/', userControllers.getAllUser)

router.get('/:userId', userControllers.getSingleUser)

router.put('/:userId', userControllers.updateUser)

router.delete('/:userId', userControllers.deleteSingleUser)

router.put('/:userId/orders', userControllers.createOrder)

router.get('/:userId/orders', userControllers.getAllOrdersOfASpecificUser)

router.get('/:userId/orders/total-price', userControllers.getTotalPriceOfOrders)
export const userRoutes = router
