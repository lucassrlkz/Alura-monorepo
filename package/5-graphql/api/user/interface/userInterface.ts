interface Irole {
  id: number;
}

export interface Iuser {
  id: number;
  nome: string;
  ativo: boolean;
  email: string;
  role: Irole;
}
