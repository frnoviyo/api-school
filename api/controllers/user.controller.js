const mapper = require("automapper-js");
const { UserDto } = require("../dto");

class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
  }
  async getUsers(req, res) {
    let users = await this._userService.getUsers();
    users = users.map((user) => mapper(UserDto, user));
    return res.send({ payload: users });
  }

  async getUser(req, res) {
    const { id } = req.params;
    let user = await this._userService.getUser(id);
    user = mapper(UserDto, user);
    return res.send({ payload: user });
  }

  async createUser(req, res) {
    const { body } = req;
    let createdUser = await this._userService.createUser(body);
    createdUser = mapper(UserDto, createdUser);
    return res.send({ payload: createdUser });
  }

  async updateUser(req, res) {
    const { body } = req;
    const { id } = req.params;
    await this._userService.updateUser(id, body);
    return res.status(204).send();
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    await this._userService.deleteUser(id);
    return res.status(204).send({ payload: "Usuario eliminado exitosamente" });
  }
}

module.exports = UserController;