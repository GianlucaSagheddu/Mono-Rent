import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';  //Cookie module


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mono-Rent';
  log: boolean = false;

  /*login():boolean{
    return false;
  }*/
}
