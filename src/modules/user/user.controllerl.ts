import { Request, Response } from 'express'
import { userServices } from './user.service'
import { joiUserSchema } from './user.validatioln'

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await req.body
    const { error, value } = joiUserSchema.validate(user)
    const result = await userServices.createUserIntoDB(value)

    if (error) {
      res.status(500).json({
        success: false,
        message:
          'User is not create successfuly, user is not valid to Joi validator',
        error: error.details,
      })
    }

    res.status(200).json({
      success: true,
      message: 'User create successfuly',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User is not create successfuly',
      error: error,
    })
  }
}

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB()
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully ',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Users not found',
      error: error,
    })
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId

    const result = await userServices.getSingleUser(userId)

    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const userData = req.body
    const result = await userServices.updateUser(userId, userData)

    res.status(200).json({
      status: true,
      message: 'update User successfully',
      datal: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    await userServices.deleteUser(userId)

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

const createUserOrders = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const userData = req.body
    const result = await userServices.createUserOrders(userId, userData)

    res.status(200).json({
      status: true,
      message: 'Order created successfully!',
      datal: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

export const userControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  createUserOrders,
}
