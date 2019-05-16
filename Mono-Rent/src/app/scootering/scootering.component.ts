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
  Offerte: Offerta[] = [];
  constructor(public http: HttpClient, private cookieService: CookieService) { }


  offri(LatI: HTMLInputElement, LongI: HTMLInputElement, LatF: HTMLInputElement, LongF: HTMLInputElement, Data: HTMLInputElement):boolean{
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
