import { Request, Response } from 'express'
import { userService } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body

    const result = await userService.createUser(userData)
    res.status(201).json({
      status: 'success',
      message: 'User create successfully',
      datal: result,
    })
  } catch (error: any) {
    console.log(error)

    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something is wrong',
    })
  }
}

export const userController = {
  createUser,
}
