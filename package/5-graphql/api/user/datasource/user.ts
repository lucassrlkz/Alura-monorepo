import { Iuser } from "../interface/userInterface";
const { RESTDataSource } = require("apollo-datasource-rest");

class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000";
  }

  async getUsers() {
    const users = await this.get("/users");
    return users.map(async (user: Iuser) => ({
      id: user.id,
      nome: user.nome,
      email: user.email,
      ativo: user.ativo,
      role: await this.get(`/roles/${user.role}`),
    }));
  }

  async getUserById(id: any) {
    const user = await this.get(`/users/${id}`);
    user.role = await this.get(`/roles/${user.id}`);
    return user;
  }
}

module.exports = UsersApi;
