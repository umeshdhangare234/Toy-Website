import { Component, OnInit } from '@angular/core';
// import { DatePipe } from '@angular/common';
// import { FormGroup } from '@angular/forms';
// import { Toy } from '../toy.model';
// import { FormBuilder } from '@angular/forms';
// import { FormControl } from '@angular/forms';
// import { FormArray } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-toy-description',
  templateUrl: './toy-description.component.html',
  styleUrls: ['./toy-description.component.css']
})
export class ToyDescriptionComponent implements OnInit {
  // animals!:Toy:
  // _url = '../src/assets/data/toys.json';
 id!:number ;
 name!:string ;
 description!:string;
 date!:Date ;
list:any = [];
//   animals:Array<any>= [
//     {"id":1, "name":"Tiger","description":"Tiger is one of the very dangerous animal of the jungle.","date":12},
//     {"id":2, "name":"Lion","description":"Lion is the king of the jungle.","date":13},
//     {"id":3, "name":"Deer","description":"Deer is one of the fastest animal of the jungle.","date":14},
//     {"id":4, "name":"Fox","description":"Fox is the cleverest animal of the jungle.","date":15},
//     {"id":5, "name":"Elephant","description":"Elephant has a very huge size.","date":16},
//     {"id":6, "name":"Rabbit","description":"Rabbit can jump very long.","date":17}
// ]



animals= [
  {"id":1, "name":"Tiger","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
  {"id":2, "name":"Lion","description":"Lion is the king of the jungle.","date":new Date()},
  {"id":3, "name":"Deer","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
  {"id":4, "name":"Fox","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
  {"id":5, "name":"Elephant","description":"Elephant has a very huge size.","date":new Date()},
  {"id":6, "name":"Rabbit","description":"Rabbit can jump very long.","date":new Date()}
]
  constructor() { }

  ngOnInit(): void {

  //  this.animals = this.http.get(this._url).subscribe(());
  this.animals = this.animals.concat(this.list) ;
  }
  
  // addToy(id:any, name:any, description:any, date:any){
  //   this.animals.push({id,name,description,date});
  // }
  // addName(){
  //   this.animals.push('name');
  // }
  // addDescription(){
  //   this.animals.push('description');
  // }
  // addDate(){
  //   this.animals.push('date');
  // }

  addToy(id:number = this.animals.length+1 ,name:string,description:string,date:Date = new Date()){
     this.list = this.animals.push({id,name,description,date});
  }
}
