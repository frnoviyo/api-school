const mapper = require("automapper-js");

class UserService {
  constructor({ UserBussiness }) {
    this._userBussiness = UserBussiness;
  }
  async getUsers() {
    const users = await this._userBussiness.getUsers();
    return users;
  }

  async getUser(id) {
    const user = await this._userBussiness.getUser(id);
    return user;
  }

  async createUser(user) {
    const createdUser = await this._userBussiness.createUser(user);
    return createdUser;
  }

  async updateUser(id, user) {
    const updatedUser = await this._userBussiness.updateUser(id, user);
    return updatedUser;
  }

  async deleteUser(id) {
    const deletedUser = await this._userBussiness.deleteUser(id);
    return deletedUser;
  }
}

module.exports = UserService;
