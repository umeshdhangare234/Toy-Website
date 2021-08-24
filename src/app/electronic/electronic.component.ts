import { Component, OnInit,TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {
  
  
  dtOptions: DataTables.Settings = {};
 
  modalRef: NgbModalRef;
 
  todaydate = new Date();
  list: any[] = [];
  data: any = {};

  electronics = [
    {"id":1, "name":"Digital Cameras","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Karaoke Machines","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Handheld Games","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"Phones & Mobile Phones","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Dance Mats","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Electronic Pets","description":"Rabbit can jump very long.","date":new Date()}
  ];

  constructor(private modalService: NgbModal) { } 

  
  ngOnInit(): void {

    this.list = this.electronics;
   
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
