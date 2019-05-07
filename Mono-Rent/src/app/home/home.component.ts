import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  //log: boolean = false;
  mess: string;

   constructor(public http: HttpClient, private cookieService: CookieService) {
     if(this.cookieService.get('ID') != undefined){
       //this.log=true;
     }
   }

   signin(Nome: HTMLInputElement, Cognome: HTMLInputElement, Usr: HTMLInputElement, Pass: HTMLInputElement, DataN: HTMLInputElement): boolean {

      this.http
        .post(' ',
          JSON.stringify({
            Nome: Nome,
            Cognome:Cognome,
            Usr: Usr,
            Pass: Pass,
            DataN: DataN
          })
        )
        .subscribe(data => {
          this.data = data;

        });
        return false;
    }


    login(Usr: HTMLInputElement, Pass: HTMLInputElement): boolean {
      this.http
        .post('https://3000-d670e502-c231-409e-b2f8-68e3b042a9da.ws-eu0.gitpod.io/utente',
          JSON.stringify({
            usr: Usr,
            pass: Pass
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

        });
        return false;
    }

    logout():boolean{
      this.cookieService.delete('ID');
      //this.log = false;
      return false;
    }

  ngOnInit() {
  }

}
