import { TUser } from './user.interface'
import { User } from './user.model'

const createUser = async (userData: TUser): Promise<TUser> => {
  const result = await User.create(userData)
  return result
}

const getAlllUser = async (): Promise<TUser[]> => {
  const result = await User.find().select('username fullName age email address')

  return result
}

const getSingleUser = async (userId: string): Promise<TUser | null> => {
  const result = await User.findById(userId)
  return result
}

const updateUser = async (
  userId: string,
  userData: TUser,
): Promise<TUser | null> => {
  const result = await User.findByIdAndUpdate(userId, userData, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteUser = async (userId: string): Promise<TUser | null> => {
  const result = await User.findByIdAndDelete(userId)
  return result
}

export const userService = {
  createUser,
  getAlllUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
