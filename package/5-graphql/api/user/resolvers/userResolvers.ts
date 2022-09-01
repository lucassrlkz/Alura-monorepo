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

const userResolvers = {
  Query: {
    users: () => users,
    user: () => users[0],
  },
};

module.exports = userResolvers;
