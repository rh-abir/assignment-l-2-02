import { Request, Response } from 'express'
import { userService } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body

    const result = await userService.createUser(userData)

    res.status(201).json({
      status: true,
      message: 'User create successfully',
      datal: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

const getAlllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAlllUser()
    res.status(200).json({
      status: true,
      message: 'Users fetched successfully!',
      datal: result,
    })
  } catch (error: any) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something is wrong',
    })
  }
}

// const getSingleUser = async (req: Request, res: Response) => {
//   try {
//     const userId = req.params.userId

//     const result = await userService.getSingleUser(userId)

//     res.status(200).json({
//       status: true,
//       message: 'User fetched successfully!',
//       datal: result,
//     })
//   } catch (error) {
//     console.log(error)

//     res.status(404).json({
//       success: false,
//       message: 'User not found',
//       error: {
//         code: 404,
//         description: 'User not found!',
//       },
//     })
//   }
// }

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId

    const result = await userService.getSingleUser(userId)

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
    const result = await userService.updateUser(userId, userData)

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
    await userService.deleteUser(userId)

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

export const userController = {
  createUser,
  getAlllUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
