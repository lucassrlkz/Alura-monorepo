import { ApolloServer, gql } from "apollo-server";

const users = [
  {
    nome: "Lucas",
    ativo: true,
  },
  {
    nome: "Luara",
    ativo: false,
  },
];

const typeDefs = gql`
  type User {
    nome: String!
    ativo: Boolean
    email: String
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });
