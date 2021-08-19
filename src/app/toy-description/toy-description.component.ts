import { Component, OnInit } from '@angular/core';
import { Toy } from '../toy.model';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-toy-description',
  templateUrl: './toy-description.component.html',
  styleUrls: ['./toy-description.component.css']
})
export class ToyDescriptionComponent implements OnInit {
  // animals!:Toy:
  // _url = '../src/assets/data/toys.json';
  animals = [
    {"id":1, "name":"Tiger","description":"Tiger is one of the very dangerous animal of the jungle.","date":12},
    {"id":2, "name":"Lion","description":"Lion is the king of the jungle.","date":13},
    {"id":3, "name":"Deer","description":"Deer is one of the fastest animal of the jungle.","date":14},
    {"id":4, "name":"Fox","description":"Fox is the cleverest animal of the jungle.","date":15},
    {"id":5, "name":"Elephant","description":"Elephant has a very huge size.","date":16},
    {"id":6, "name":"Rabbit","description":"Rabbit can jump very long.","date":17}
]
  constructor() { }

  ngOnInit(): void {

  //  this.animals = this.http.get(this._url).subscribe(());
  }
  
  addToy(){
    this.animals.push();
  }
}
