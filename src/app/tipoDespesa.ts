export class TipoDespesa {
  id: number;
  nome: string;
  icone: string;

  constructor(
    i: number, n:string, o:string) 
  {
    this.id = i;
    this.nome = n;
    this.icone = o;
  }

}
