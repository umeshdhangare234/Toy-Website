import { Component, OnInit, TemplateRef } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { Animal } from './animal';
// import { DatePipe } from '@angular/common';
// import { FormGroup } from '@angular/forms';
// import { Toy } from '../toy.model';
// import { FormBuilder } from '@angular/forms';
// import { FormControl } from '@angular/forms';
// import { FormArray } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-toy-description',
  templateUrl: './toy-description.component.html',
  styleUrls: ['./toy-description.component.css']
})
export class ToyDescriptionComponent implements OnInit {
  modalRef: NgbModalRef;
  date=new Date();
  animal: any;
  animals: any[] = [];
  constructor(private modalService: NgbModal,
              public template:TemplateRef<any>) { }

  ngOnInit(): void {


  }
  openPopup(template: TemplateRef<any>) {
    this.animal = {};
    this.animals.push(this.animal);

    this.modalRef = this.modalService.open(template);
  }
  addToy() {
    this.animal.push();
  }

  // edit(id:number = this.animals.length, name:string,description:string,date:Date){
  //           this.name = name;
  //           this.description = description;
  //   }

  edit(item) {
    this.animals = item;
  }

  save() {

  }
}
