import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
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
  mess: string;

  constructor() { }

  noleggia(numero): boolean{
    
    return false;
  }

  ngOnInit() {
  }

}
