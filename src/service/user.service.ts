import { User } from '../entity/user.entity';

export default class UserService {
  static async getUsers() {
    const users = await User.find();
    return users;
  }
}