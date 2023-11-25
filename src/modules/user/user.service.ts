import { TUser } from './user.interface'
import { User } from './user.model'

const createUserIntoDb = async (userData: TUser): Promise<TUser> => {
  const result = await User.create(userData)
  return result
}

export const userService = {
  createUserIntoDb,
}
