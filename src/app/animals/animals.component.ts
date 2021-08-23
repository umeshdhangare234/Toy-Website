import { Component, OnInit,TemplateRef } from '@angular/core';
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

  constructor(private modalService: NgbModal,
    private router: Router,) { }
  ngOnInit(): void {

    this.dtOptions = {
      "searching": false,
      pagingType: 'full_numbers'
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

