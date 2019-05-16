import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';  //Cookie module

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Object;
  o :Observable<Object>;

  mess: string;

   constructor(public http: HttpClient, private cookieService: CookieService) {

   }

   signin(Nome: HTMLInputElement, Cognome: HTMLInputElement, Usr: HTMLInputElement, Pass: HTMLInputElement, DataN: HTMLInputElement): boolean {

      /* this.http
        .post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/regutente',
          JSON.stringify({
            Nome: Nome.value,
            Cognome:Cognome,
            Usr: Usr,
            Pass: Pass,
            DataN: DataN
          })
        )
        .subscribe(data => {
          this.data = data;

        });*/


        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'

        });


        const params = new HttpParams()
          .set('Nome', Nome.value)
          .set('Cognome', Cognome.value)
          .set('Usr', Usr.value)
          .set('Pass', Pass.value)
          .set('DataN', DataN.value);

          const options = {
          headers,
          params,
          withCredentials: false
        };

        var parameter = JSON.stringify({ Nome: Nome.value,
            Cognome:Cognome.value,
            Usr: Usr.value,
            Pass: Pass.value,
            DataN: DataN.value
        });

        this.http.post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/regutente',null, options  )
          .subscribe(data => {
            this.data = data;


        });
        return false;
    }


    login(Usr: HTMLInputElement, Pass: HTMLInputElement): boolean {

      /*this.http
        .post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/utente',
          JSON.stringify({
            usr: Usr.value,
            pass: Pass.value
          })
        )
        .subscribe(data => {
          this.data = data;

          if(this.data[0].autorizzazione == "OK"){
            this.cookieService.set("ID", this.data[0].ID[0].ID);
            //this.log=true;
          }else{
            this.mess="Username o Password errati";
          }

        });*/


        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'

        });


        const params = new HttpParams()
          .set('usr', Usr.value)
          .set('pass', Pass.value);


        const options = {
          headers,
          params,
          withCredentials: false
        };

        var parameter = JSON.stringify({
            usr: Usr.value,
            pass: Pass.value
        });

        this.http.post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/utente',null, options  )
          .subscribe(data => {
            this.data = data;

            if(this.data[0].autorizzazione == "OK"){
              this.cookieService.set("ID", this.data[0].ID[0].ID);
              window.location.reload();
              //this.log=true;
            }else{
              this.mess="Username o Password errati";
            }


        });

        return false;
    }



  ngOnInit() {
  }

}
