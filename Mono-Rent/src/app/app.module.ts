import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoleggioComponent } from './noleggio/noleggio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoleggioComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
