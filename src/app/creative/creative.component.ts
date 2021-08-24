import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creative',
  templateUrl: './creative.component.html',
  styleUrls: ['./creative.component.css']
})
export class CreativeComponent implements OnInit {

  modalRef: NgbModalRef;
 
  todaydate = new Date();
  list: any[] = [];
  data: any = {};
  creatives = [
    {"id":1, "name":"Optimus Prime","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Transformers","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Captain America","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"tortoise","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Spider Man","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Iron Man","description":"Rabbit can jump very long.","date":new Date()}
  ]

 
  constructor(private modalService:NgbModal) { }
  
  ngOnInit(): void {
    this.list = this.creatives;
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
