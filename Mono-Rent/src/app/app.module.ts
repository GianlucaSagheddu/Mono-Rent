import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoleggioComponent } from './noleggio/noleggio.component';
import { SegnalaComponent } from './segnala/segnala.component';

import { AgmCoreModule } from '@agm/core';
import { CookieService } from 'ngx-cookie-service';
import { ScooteringComponent } from './scootering/scootering.component'; //Cookie module https://www.npmjs.com/package/ngx-cookie-service

//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'; //Socket IO https://www.npmjs.com/package/ngx-socket-io

//const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoleggioComponent,
    SegnalaComponent,
    ScooteringComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzUI8LYmnHPyFrtRT8Q8IEREZfOygUl-U'
    })
    //SocketIoModule.forRoot(config)
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
