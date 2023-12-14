import { TOrder, TUser } from './user.interface'
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

const getSingleUserFromDB = async (userId: string): Promise<TUser | null> => {
  const result = await UserModel.findOne(
    { _id: userId },
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

const updateUserIntoDB = async (
  userId: string,
  updatedUser: TUser,
): Promise<TUser | null> => {
  const options = {
    new: true,
    projection: { orders: 0, password: 0 },
  }

  const result = await UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: updatedUser },
    options,
  )
  return result
}

const deleteUserIntoDB = async (userId: string) => {
  const result = await UserModel.deleteOne({ _id: userId })
  return result
}

const createOrderIntoDB = async (userId: string, order: TOrder) => {
  const result = await UserModel.updateOne(
    { _id: userId },
    { $push: { orders: order } },
  )
  return result
}

const getAllOrdersASpecificUserFromDB = async (UserId: string) => {
  const result = await UserModel.findOne({ _id: UserId }, { orders: 1 })
  return result
}

const getTotalPriceOfOrdersFromDB = async (UserId: string) => {
  console.log(UserId, 'service tag')
  const result = await UserModel.aggregate([
    // stage 1
    { $match: { _id: UserId } },
    // stage 2
    { $unwind: '$orders' },
    // stage 3
    {
      $group: {
        _id: '$_id',
        totalPrice: {
          $sum: { $multiply: ['$orders.price', '$orders.quantity'] },
        },
      },
    },

    // { $match: { _id: UserId } },

    // { $unwind: '$orders' },

    // {
    //   $group: {
    //     _id: '$_id',
    //     total: { $sum: '$orders.price' },
    //   },
    // },
  ])
  return result
}

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserIntoDB,
  createOrderIntoDB,
  getAllOrdersASpecificUserFromDB,
  getTotalPriceOfOrdersFromDB,
}
