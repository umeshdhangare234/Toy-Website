import { Component, OnInit,TemplateRef } from '@angular/core';
import { ToyService } from '../toy.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

 
  dtOptions: DataTables.Settings = {};
 
  modalRef: NgbModalRef;
 
  todaydate = new Date();
  list: any[] = [];
  data: any = {};

  // receiveData(){
  //   this.toyService.getData().subscribe(data => this.animals = data);
  //   console.log(this.data);
  // }

  animals = [
    {"id":1, "name":"Tiger","description":"Tiger is one of the very dangerous animal of the jungle.","date":new Date('12-12-2012')},
    {"id":2, "name":"Lion","description":"Lion is the king of the jungle.","date":new Date()},
    {"id":3, "name":"Deer","description":"Deer is one of the fastest animal of the jungle.","date":new Date()},
    {"id":4, "name":"Fox","description":"Fox is the cleverest animal of the jungle.","date":new Date()},
    {"id":5, "name":"Elephant","description":"Elephant has a very huge size.","date":new Date()},
    {"id":6, "name":"Rabbit","description":"Rabbit can jump very long.","date":new Date()}
  ];
  constructor(private modalService: NgbModal,
    private router: Router,
    private toyService:ToyService) { }
  ngOnInit(): void {

    this.list = this.animals;
    // this.receiveData();
    this.dtOptions = {
      "paging":true
    };

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

