import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mono-Rent';
   data: Object;

   o :Observable<Object>;
   constructor(public http: HttpClient) {}
   makeCompactPost(Nome: HTMLInputElement, Cognome: HTMLInputElement, Usr: HTMLInputElement, Pass: HTMLInputElement, DataN: HTMLInputElement): boolean {

   this.http
     .post(' ',
       JSON.stringify({
         
       })
     )
     .subscribe(data => {
       this.data = data;

     });
     return false;
 }

}
