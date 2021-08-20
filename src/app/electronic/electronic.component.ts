import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {
  id!:number ;
  name!:string ;
  description!:string;
  date!:Date ;
  list:any = [];
  constructor() { }
  electronics = [
    {"id":1, "name":"Digital Cameras","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Karaoke Machines","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Handheld Games","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"Phones & Mobile Phones","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Dance Mats","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Electronic Pets","description":"Rabbit can jump very long.","date":new Date()}
  ]
  ngOnInit(): void {
    this.electronics = this.electronics.concat(this.list) ;
  }

  addToy(id:number = this.electronics.length + 1,name:string,description:string,date:Date = new Date()){
    this.list = this.electronics.push({id,name,description,date});
 }
}
