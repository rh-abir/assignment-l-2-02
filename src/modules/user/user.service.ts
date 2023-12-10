import { TUser } from './user.interface'
import { UserModel } from './user.model'

const createUserIntoDB = async (user: TUser) => {
  const newUser = await UserModel.create(user)
  const result = await UserModel.findOne(
    { _id: newUser._id },
    {
      _id: 0,
      userId: 1,
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
    },
  )

  return result
}

const getAllUserFromDB = async () => {
  const result = await UserModel.find({}).select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  })

  return result
}

const getSingleUserFromDB = async (userId: number): Promise<TUser | null> => {
  const result = await UserModel.findOne(
    { userId },
    {
      userId: 1,
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
    },
  )

  return result
}

const getSingleUser = async (userId: string): Promise<TUser | null> => {
  const result = await UserModel.findById(userId, {
    password: 0,
    orders: 0,
    __v: 0,
  })

  return result
}

const updateUser = async (
  userId: string,
  userData: TUser,
): Promise<TUser | null> => {
  const result = await UserModel.findByIdAndUpdate(userId, userData, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteUser = async (userId: string): Promise<TUser | null> => {
  const result = await UserModel.findByIdAndDelete(userId)
  return result
}

const createUserOrders = async (userId: string, userData: TUser) => {
  const result = await UserModel.aggregate([
    { $match: { _id: userId } },
    { $addFields: { orders: userData } },
  ])

  return result
}

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  getSingleUser,
  updateUser,
  deleteUser,
  createUserOrders,
}
