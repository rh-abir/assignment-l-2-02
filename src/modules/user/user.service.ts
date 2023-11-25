import { TUser } from './user.interface'
import { User } from './user.model'

const createUser = async (userData: TUser): Promise<TUser> => {
  const result = await User.create(userData)
  return result
}

export const userService = {
  createUser,
}
