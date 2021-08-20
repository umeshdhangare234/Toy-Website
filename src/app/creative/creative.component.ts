import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creative',
  templateUrl: './creative.component.html',
  styleUrls: ['./creative.component.css']
})
export class CreativeComponent implements OnInit {

  id!:number ;
  name!:string ;
  description!:string;
  date!:Date ;
  list:any = [];
  constructor() { }
  creatives = [
    {"id":1, "name":"Optimus Prime","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Transformers","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Captain America","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"tortoise","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Spider Man","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Iron Man","description":"Rabbit can jump very long.","date":new Date()}
  ]
  ngOnInit(): void {
    this.creatives = this.creatives.concat(this.list) ;
  }

  addToy(id:number = this.creatives.length +1,name:string,description:string,date:Date = new Date()){
    this.list = this.creatives.push({id,name,description,date});
 }
}
