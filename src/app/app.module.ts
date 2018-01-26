import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import {AngularFireModule} from 'angularfire2';
import {HttpModule} from '@angular/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';
export const firebaseConfig = environment.firebaseConfig;

// matrials imports
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';





// component imports
import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { ListeComponent } from './liste/liste.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    ListeComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatButtonModule,
    CoreModule,
    HttpModule,
    MatGridListModule,
    MatCardModule,
    LazyLoadImageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
