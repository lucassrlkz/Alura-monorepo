import { Iuser, IusersApi } from "../interface/userInterface";

const userResolvers = {
  Query: {
    users: (_root: any, _args: any, { dataSources }: IusersApi): Iuser[] =>
      dataSources.usersAPI.getUsers(),

    user: (_root: any, { id }: Iuser, { dataSources }: IusersApi): Iuser =>
      dataSources.usersAPI.getUserById(id),
  },

  Mutation: {
    adicionaUser: async (
      _root: any,
      user: Iuser,
      { dataSources }: IusersApi
    ): Promise<Iuser> => dataSources.usersAPI.adicionaUser(user),

    atualizaUser: async (
      _root: any,
      newData: Iuser,
      { dataSources }: IusersApi
    ): Promise<Iuser> => dataSources.usersAPI.atualizaUser(newData),

    deletaUser: async (
      _root: any,
      { id }: Iuser,
      { dataSources }: IusersApi
    ): Promise<any> => dataSources.usersAPI.deletaUser(id),
  },
};

export default userResolvers;
