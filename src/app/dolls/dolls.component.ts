import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dolls',
  templateUrl: './dolls.component.html',
  styleUrls: ['./dolls.component.css']
})
export class DollsComponent implements OnInit {
    id!:number ;
  name!:string ;
  description!:string;
  // newDate = new Date();
  date!:Date ;
  // newId:any;
  list:any = [];
  constructor() { }
  dolls = [
    {"id":1, "name":"Thumbelina","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Princess Lia","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Lady Agnes","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"Leisha","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Danka","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Véronique","description":"Rabbit can jump very long.","date":new Date()}
  ]
  ngOnInit(): void {
    // this.newId = this.dolls.length + 1;
    this.dolls = this.dolls.concat(this.list) ;
    // this.dolls.length = this.newId ;
  }

  addToy(id:number = this.dolls.length + 1,name:string,description:string,date:Date = new Date()){
    // this.id = this.dolls.length + 1;
    // this.newDate = new Date();
    this.list = this.dolls.push({id,name,description, date});
 }

 
}
