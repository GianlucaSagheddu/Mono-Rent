export class Monopattino{
  ID: number;
  Tipo: string;
  Coord: Object;
  Stato: boolean;

  constructor(ID: number, Tipo: string, Coord: Object, Stato: boolean){
    this.ID=ID;
    this.Tipo=Tipo;
    this.Coord=Coord;
    this.Stato=Stato;
  }
}
