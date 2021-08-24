import { Component, OnInit,TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  todaydate = new Date();
  dtOptions: DataTables.Settings = {};
  list:any = [];
  data:any = {};
  modalRef: NgbModalRef;
  constructor(private modalService: NgbModal) { }
  cars = [
    {"id":1, "name":"Lightning McQueen","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Cruz Ramirez","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Jackson Storm","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"Sterling","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Natalie Certain","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Cal Weathers","description":"Rabbit can jump very long.","date":new Date()}
  ];
  ngOnInit() {
   

    this.dtOptions = {
     "searching":false
    }

    this.default();
  }

  default(){
    this.list = this.cars;
  }

  openPopup(template: TemplateRef<any>) {
    this.data = {};
    this.list.push(this.data);
 
    this.modalRef = this.modalService.open(template);
  }
 
  add() {
    
    this.closePopup();
  }
 
  closePopup() {
    this.modalRef.close();
  }
 
  edit(item,template) {
    this.data=item;
    this.modalRef = this.modalService.open(template);
    
  }
  save() {
 
    this.closePopup();
  }

}
