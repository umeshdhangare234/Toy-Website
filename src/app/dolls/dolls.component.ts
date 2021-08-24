import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dolls',
  templateUrl: './dolls.component.html',
  styleUrls: ['./dolls.component.css']
})
export class DollsComponent implements OnInit {
  dtOptions : DataTables.Settings = {};
  list:any = [];
  modalRef: NgbModalRef;
  data:any = {};
  todaydate = new Date();

  constructor(private modalService: NgbModal) { }
  dolls = [
    {"id":1, "name":"Thumbelina","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Princess Lia","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Lady Agnes","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"Leisha","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Danka","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Véronique","description":"Rabbit can jump very long.","date":new Date()}
  ]
  ngOnInit(): void {
   this.list = this.dolls;
   
   this.dtOptions = {
    "searching":true
   }
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
