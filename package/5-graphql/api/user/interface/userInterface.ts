interface Irole {
  id: number;
  type: string;
}

export interface Iuser {
  id: number;
  nome: string;
  ativo: boolean;
  email: string;
  role: Irole;
}

export interface IusersApi {
  dataSources: {
    usersAPI: {
      getUsers(): [Iuser];
      getUserById(id: number): Iuser;
      adicionaUser(user: Iuser): Promise<Iuser>;
      atualizaUser(user: Iuser): Promise<Iuser>;
      deletaUser(id: number): Promise<any>;
    };
  };
}
