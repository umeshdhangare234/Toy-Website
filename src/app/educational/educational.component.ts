import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css']
})
export class EducationalComponent implements OnInit {

  modalRef: NgbModalRef;
 
  todaydate = new Date();
  list: any[] = [];
  data: any = {};
  educationals = [
    {"id":1, "name":"Building blocks","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Musical rhymes book","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Leapfrog learning 100 words book","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"Building Structures with Lego","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Fold Origami Brainteasers","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Electronic Memory Games","description":"Rabbit can jump very long.","date":new Date()}
  ]
  
  constructor(private modalService:NgbModal) { }

 
  ngOnInit(): void {
    this.list = this.educationals;
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
