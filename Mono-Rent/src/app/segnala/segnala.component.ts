import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';  //Cookie module

@Component({
  selector: 'app-segnala',
  templateUrl: './segnala.component.html',
  styleUrls: ['./segnala.component.css']
})
export class SegnalaComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  segnala(Num: HTMLInputElement, Desc: HTMLInputElement):boolean{
    console.log(this.cookieService.get('ID'));
    return false;
  }

  ngOnInit() {
  }

}
