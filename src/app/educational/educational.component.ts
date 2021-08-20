import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css']
})
export class EducationalComponent implements OnInit {

  id!:number ;
  name!:string ;
  description!:string;
  date!:Date ;
  list:any = [];
  constructor() { }
  educationals = [
    {"id":1, "name":"Building blocks","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Musical rhymes book","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Leapfrog learning 100 words book","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"Building Structures with Lego","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Fold Origami Brainteasers","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Electronic Memory Games","description":"Rabbit can jump very long.","date":new Date()}
  ]
  ngOnInit(): void {
    this.educationals = this.educationals.concat(this.list) ;
  }

  addToy(id:number = this.educationals.length + 1,name:string,description:string,date:Date = new Date()){
    this.list = this.educationals.push({id,name,description,date});
 }
}
