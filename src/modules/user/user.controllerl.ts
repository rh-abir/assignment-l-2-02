import { Request, Response } from 'express'
import { userServices } from './user.service'
import { JoiordersSchema, joiUserSchema } from './user.validatioln'

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
    const { userId } = req.params
    const UserId = Number(userId)
    const result = await userServices.getSingleUserFromDB(UserId)

    if (result === null) {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully',
        data: result,
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: error,
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const UserId = Number(userId)
    const updatedUser = await req.body
    const { error, value } = joiUserSchema.validate(updatedUser)

    if (error) {
      res.status(500).json({
        success: false,
        message:
          'User is not update successfuly , user is not valid to Joi validator',
        error: error.details,
      })
    }

    const result = await userServices.updateUserIntoDB(UserId, value)

    if (result !== null) {
      res.status(200).json({
        success: true,
        message: 'User updated successfully!',
        data: result,
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      })
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.details || 'User not updated!',
      error: error,
    })
  }
}

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const UserId = Number(userId)
    const result = await userServices.deleteUserIntoDB(UserId)

    if (result.deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found',
        },
      })
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User not found',
      error: {
        code: 404,
        description: 'User not found',
      },
    })
  }
}

const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const UserId = Number(userId)
    const order = req.body
    const { error, value } = JoiordersSchema.validate(order)
    if (error) {
      res.status(500).json({
        success: false,
        message: 'order is not valid',
        error: {
          code: 404,
          description: 'order is not valid',
        },
      })
    }
    const result = await userServices.createOrderIntoDB(UserId, value)
    if (result.modifiedCount > 0) {
      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: null,
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found',
        },
      })
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User not found',
      error: error,
    })
  }
}

const getAllOrderASpecificUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const UserId = Number(userId)
    const result = await userServices.getAllOrdersASpecificUserFromDB(UserId)

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Order fetched successfully!',
        data: result,
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found',
        },
      })
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found',
      },
    })
  }
}

export const userControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteSingleUser,
  createOrder,
  getAllOrderASpecificUser,
}
