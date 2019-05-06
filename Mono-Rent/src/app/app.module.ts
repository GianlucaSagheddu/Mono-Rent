import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoleggioComponent } from './noleggio/noleggio.component';
import { SegnalaComponent } from './segnala/segnala.component';


import { CookieService } from 'ngx-cookie-service'; //Cookie module

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoleggioComponent,
    SegnalaComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
