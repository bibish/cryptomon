import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import {AngularFireModule} from 'angularfire2';
import {HttpModule} from '@angular/http'
export const firebaseConfig = environment.firebaseConfig;


import { MatButtonModule } from '@angular/material/button';




import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatButtonModule,
    CoreModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
