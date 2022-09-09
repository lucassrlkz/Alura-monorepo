const userResolvers = {
  Query: {
    users: (_root: any, _args: any, { dataSources }: any) => {
      return dataSources.usersAPI.getUsers();
    },
    user: (_root: any, { id }: any, { dataSources }: any) => {
      return dataSources.usersAPI.getUserById(id);
    },
  },
};

export default userResolvers;
