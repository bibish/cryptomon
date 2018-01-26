import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})

export class ConnectComponent implements OnInit {

  constructor(public auth: AuthService, private http: Http) {
  		this.getData();
   }

  ngOnInit() {

  }
  getData(){
  		return this.http.get('https://raw.githubusercontent.com/cheeaun/repokemon/master/data/pokemon-list.json')
  		.map((res: Response) => res.json())
  }
  showData(){
  	this.getData().subscribe(data =>{
  		console.log(data);
  	})
  }
 		

}
