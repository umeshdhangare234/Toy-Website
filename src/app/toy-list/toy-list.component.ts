import { Component, OnInit } from '@angular/core';
import { Toy } from '../toy.model';

@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.css']
})
export class ToyListComponent implements OnInit {
  ToysTypes:string[] = ['Animals', 'Dolls','Cars','Electronic Toys','Educational Toys','Action Figures'];
  constructor() { }

  ngOnInit(): void {
  }

  addToys(toyType:string){
    this.ToysTypes.push(toyType);
  }
}
