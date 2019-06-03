import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';  //Cookie module
import { Monopattino } from './Monopattino.model';



@Component({
  selector: 'app-noleggio',
  templateUrl: './noleggio.component.html',
  styleUrls: ['./noleggio.component.css']
})
export class NoleggioComponent implements OnInit {
  data: Object;
  o :Observable<Object>;
  Mono: Array<Monopattino>= [];
  //log: boolean = false;
  mess: string="";
  nol: boolean =false;

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public http: HttpClient, private cookieService: CookieService) {
    if(this.cookieService.get('Nol') != ""){
      this.nol=true;
    }
    this.o = this.http.get('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/visuMezzi');
    this.o.subscribe(data => {
        for(var i = 0; i < data.lenght; i++){
          this.Mono.push(new Monopattino(data[i].ID, data[i].Tipo, data[i].Coord, data[i].Stato));

        }

    });
    //this.Mono.push(new Monopattino(1, "monopattino", {geometry: {coordinates:[55.11, 13.3]}}, true));
    //this.Mono.push(new Monopattino(1, "monopattino", {geometry: {coordinates:[23.11, 45.3]}}, true));
  }

  noleggia(numero: HTMLInputElement): boolean{
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });


    const params = new HttpParams()
      .set('idMezzo', numero.value)
      .set('idUtente', this.cookieService.get('ID'))
      .set('Lat', "22")
      .set('Long', "22"); //coordinate andranno prese dalla geolocalizzazione
      const options = {
      headers,
      params,
      withCredentials: false
    };

    var parameter = JSON.stringify({ idMezzo: numero.value, idUtente: this.cookieService.get('ID'), Lat: 22, Long: 22 });

    this.http.post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/noleggiaM',null, options  )
      .subscribe(data => {
        this.data = data;
        if(this.data[0].message == "OK"){
          this.mess="Monopattino sbloccato";
          this.cookieService.set("Nol", numero.value);
          this.nol= true;
        }else{
          this.mess="C'è stato un problema. Riprova più tardi";
        }
    });
    return false;
  }


  Blocca(): boolean{
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });


    const params = new HttpParams()
      .set('idMezzo', this.cookieService.get('Nol'))
      .set('idUtente', this.cookieService.get('ID'))
      .set('Lat', "33")
      .set('Long', "33"); //coordinate andranno prese dalla geolocalizzazione
      const options = {
      headers,
      params,
      withCredentials: false
    };

    var parameter = JSON.stringify({ idMezzo: this.cookieService.get('Nol'), idUtente: this.cookieService.get('ID'), Lat: 33, Long: 33 });

    this.http.post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/BloccaM',null, options  )
      .subscribe(data => {
        this.data = data;
        if(this.data[0].message == "OK"){
          this.mess="Monopattino bloccato";
          this.nol=false;
        }else{
          this.mess="C'è stato un problema. Riprova più tardi";
        }
    });
    return false;
  }

  ngOnInit() {
  }

}
