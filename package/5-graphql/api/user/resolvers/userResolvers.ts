import { Iuser, IusersApi, InewData } from "../interface/userInterface";
import { GraphQLScalarType } from "graphql";

const userResolvers = {
  RolesType: {
    ESTUDANTE: "ESTUDANTE",
    DOCENTE: "DOCENTE",
    COORDENACAO: "COORDENACAO",
  },

  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "string de data e hora no formato iso-8601",
    serialize: (value: any) => value.toISOString(),
    parseValue: (value: any) => new Date(value),
    parseLiteral: (ast: any) => new Date(ast.value),
  }),

  Query: {
    users: (_root: any, _args: any, { dataSources }: IusersApi): Iuser[] =>
      dataSources.usersAPI.getUsers(),

    user: (_root: any, { id }: Iuser, { dataSources }: IusersApi): Iuser =>
      dataSources.usersAPI.getUserById(id),
  },

  Mutation: {
    adicionaUser: async (
      _root: any,
      { user }: InewData,
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
