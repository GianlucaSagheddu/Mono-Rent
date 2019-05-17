import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';  //Cookie module

@Component({
  selector: 'app-segnala',
  templateUrl: './segnala.component.html',
  styleUrls: ['./segnala.component.css']
})
export class SegnalaComponent implements OnInit {
  data: Object;
  o :Observable<Object>;

  mess: string;
  constructor(public http: HttpClient, private cookieService: CookieService) { }

  segnala(Num: HTMLInputElement, Desc: HTMLInputElement):boolean{
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });


    const params = new HttpParams()
      .set('idMezzo', Num.value)
      .set('desc', Desc.value);

      const options = {
      headers,
      params,
      withCredentials: false
    };

    var parameter = JSON.stringify({ idMezzo: Num.value, desc: Desc.value });

    this.http.post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/segnalaG',null, options  )
      .subscribe(data => {
        this.data = data;
        if(this.data[0].message == "OK"){
          this.mess="Segnalazione inviata";

        }else{
          this.mess="C'è stato un problema. Riprova più tardi";
        }
    });
    return false;
  }

  ngOnInit() {
  }

}
