export class Offerta{
  IdProponente: number;
  IdPartecipante: number;
  Id: number;
  Percorso: Object;
  Data: string;
  constructor(IdProponente: number, IdPartecipante: number, Id: number, Percorso: Object, Data: string){
    this.IdProponente =IdProponente;
    this.IdPartecipante=IdPartecipante;
    this.Id=Id;
    this.Percorso=Percorso;
    this.Data = Data;
  }
}
