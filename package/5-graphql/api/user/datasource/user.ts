import { Iuser, InewData } from "../interface/userInterface";
const { RESTDataSource } = require("apollo-datasource-rest");

class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000";
    this.resposta = {
      code: 200,
      mensagem: "operação efetuada com sucesso",
    };
  }

  async getUsers(): Promise<Iuser[]> {
    const users = await this.get("/users");
    return users.map(async (user: Iuser) => ({
      id: user.id,
      nome: user.nome,
      email: user.email,
      ativo: user.ativo,
      role: await this.get(`/roles/${user.role}`),
    }));
  }

  async getUserById(id: number): Promise<Iuser> {
    const user = await this.get(`/users/${id}`);
    user.role = await this.get(`/roles/${user.id}`);
    return user;
  }

  async adicionaUser(user: Iuser): Promise<Iuser> {
    const users = await this.get("/users");
    user.id = users.length + 1;
    const role = await this.get(`roles?type=${user.role}`);

    await this.post("users", { ...user, role: role[0].id });

    return { ...user, role: role[0] };
  }

  async atualizaUser(newData: InewData): Promise<Iuser> {
    const role = await this.get(`roles?type=${newData.user.role}`);
    await this.put(`users/${newData.id}`, {
      ...newData.user,
      role: role[0].id,
    });
    return {
      ...this.resposta,
      user: { ...newData.user, role: role[0] },
    };
  }

  async deletaUser(id: number): Promise<any> {
    await this.delete(`users/${id}`);
    return this.resposta;
  }
}

module.exports = UsersApi;
