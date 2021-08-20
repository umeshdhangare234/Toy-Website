import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  id!:number ;
  name!:string ;
  description!:string;
  date!:Date ;
  list:any = [];
  constructor() { }
  cars = [
    {"id":1, "name":"Lightning McQueen","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Cruz Ramirez","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Jackson Storm","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"Sterling","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Natalie Certain","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Cal Weathers","description":"Rabbit can jump very long.","date":new Date()}
  ]
  ngOnInit(): void {
    this.cars = this.cars.concat(this.list) ;
  }

  addToy(id:number = this.cars.length + 1 ,name:string,description:string,date:Date = new Date()){
    this.list = this.cars.push({id,name,description,date});
 }

}
