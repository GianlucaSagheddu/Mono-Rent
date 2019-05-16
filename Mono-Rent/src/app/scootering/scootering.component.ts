import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';  //Cookie module
import { Offerta } from './Offerta.model';

@Component({
  selector: 'app-scootering',
  templateUrl: './scootering.component.html',
  styleUrls: ['./scootering.component.css']
})
export class ScooteringComponent implements OnInit {
  o :Observable<Offerta[]>;
  data: Object;
  Offerte: Offerta[] = [];
  constructor(public http: HttpClient, private cookieService: CookieService) { }


  offri(IdMezzo: HTMLInputElement, LatI: HTMLInputElement, LongI: HTMLInputElement, LatF: HTMLInputElement, LongF: HTMLInputElement, Data: HTMLInputElement):boolean{
    const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'

        });


        const params = new HttpParams()
          .set('IdMezzo', IdMezzo.value)
          .set('Data', Data.value)
          .set('CoordI', LatI.value +", " +LongI.value)
          .set('CoordF', LatF.value +", " + LongF.value)
          .set('idUtente', this.cookieService.get('ID'));

          const options = {
          headers,
          params,
          withCredentials: false
        };

        var parameter = JSON.stringify({
            idMezzo: IdMezzo.value,
            Data: Data.value,
            CoordI: [LatI.value, LongI.value],
            CoordF: [LatF.value, LongF.value],
            idUtente: this.cookieService.get('ID')
        });

        this.http.post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/prenotaS',null, options  )
          .subscribe(data => {
            this.data = data;


        });
    return false;
  }

  carica(): boolean{
    this.o = this.http.get<Offerta[]>('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/visuOff');
      this.o.subscribe(data => {
          for(var i = 0; i < data.length; i++){
            this.Offerte.push(new Offerta(data[i].IdProponente, data[i].IdPartecipante, data[i].Id, data[i].Percorso, data[i].Data));

            }

        });


    return false;
  }

  ngOnInit() {
  }

}
