import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Object;

   o :Observable<Object>;
   constructor(public http: HttpClient) {}
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
        .post(' ',
          JSON.stringify({
            Usr: Usr,
            Pass: Pass
          })
        )
        .subscribe(data => {
          this.data = data;

        });
        return false;
    }

  ngOnInit() {
  }

}
