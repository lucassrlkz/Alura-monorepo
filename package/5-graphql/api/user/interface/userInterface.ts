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
