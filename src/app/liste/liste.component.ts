import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
	
	data : any[];		
  constructor(private http: Http) { 
  
	}

  ngOnInit() {
 	this.getData();
  }
   getData(){
  		return this.http.get('https://raw.githubusercontent.com/cheeaun/repokemon/master/data/pokemon-list.json')
  		.map((res: Response) => res.json())
  		.subscribe(res =>{
  		this.data = res
  		console.log(this.data);
  	})
  }

}
