const { ApolloServer } = require("apollo-server");
const userSchema = require("./user/schema/user.graphql");
const UsersApi = require("./user/datasource/user");

import userResolver from "./user/resolvers/userResolvers";

const typeDefs = [userSchema];
const resolvers = [userResolver];

const server = new ApolloServer({
  typeDefs,
  resolvers,

  dataSources: () => {
    return {
      usersAPI: new UsersApi(),
    };
  },
});

server.listen().then(({ url }: any) => {
  console.log(`Servidor rodando na porta ${url}`);
});
