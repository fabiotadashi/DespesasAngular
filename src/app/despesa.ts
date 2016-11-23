
export class Despesa {
  id: number;
  tipo: string;
  icone: string;
  nome: string;
  data: Date;
  valor: number;


  constructor(
    i: number, t: string, ic: string, n: string, d: Date, v: number)
  {
    this.id = i;
    this.tipo = t;
    this.icone = ic;
    this.nome = n;
    this.data = d;
    this.valor = v;
  }

}
