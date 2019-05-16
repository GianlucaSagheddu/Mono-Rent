import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';  //Cookie module

@Component({
  selector: 'app-noleggio',
  templateUrl: './noleggio.component.html',
  styleUrls: ['./noleggio.component.css']
})
export class NoleggioComponent implements OnInit {
  data: Object;
  o :Observable<Object>;
  //log: boolean = false;
  mess: string="";
  nol: boolean =false;

  constructor(public http: HttpClient, private cookieService: CookieService) {
    if(this.cookieService.get('Nol') != ""){
      this.nol=true;
    }
  }

  noleggia(numero: HTMLInputElement): boolean{
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });


    const params = new HttpParams()
      .set('idMezzo', numero.value);

      const options = {
      headers,
      params,
      withCredentials: false
    };

    var parameter = JSON.stringify({ idMezzo: numero.value  });

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
      .set('idMezzo', this.cookieService.get('Nol'));

      const options = {
      headers,
      params,
      withCredentials: false
    };

    var parameter = JSON.stringify({ idMezzo: this.cookieService.get('Nol')  });

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
