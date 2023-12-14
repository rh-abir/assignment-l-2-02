import express, { Router } from 'express'
import { userControllers } from './user.controllerl'

const router: Router = express.Router()

router.post('/', userControllers.createUser) // doen

router.get('/', userControllers.getAllUser) // doen

router.get('/:userId', userControllers.getSingleUser) // doen

router.put('/:userId', userControllers.updateUser) // doen

router.delete('/:userId', userControllers.deleteSingleUser) // done

router.put('/:userId/orders', userControllers.createOrder) // done

router.get('/:userId/orders', userControllers.getAllOrderASpecificUser) //done

router.get('/:userId/orders/total-price', userControllers.getTotalPriceOfOrders)

export const userRoutes = router
