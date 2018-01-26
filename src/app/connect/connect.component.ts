import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})

export class ConnectComponent implements OnInit {

  constructor(public auth: AuthService ) {
  		
   }

  ngOnInit() {

  }
  
 		

}
