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
  Vpage: string = "noleggio";

  constructor(private cookieService: CookieService){

    if(this.cookieService.get('ID') != ""){
      this.log = true;
    }
  }

  pagina(Vpage: string){
    this.Vpage = Vpage;
  }

  logout():boolean{
    this.cookieService.delete('ID');
    this.log = false;
    return true;
  }
}
