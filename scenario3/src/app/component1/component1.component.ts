
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit  {

  Message = ""
  constructor() {

   }

  ngOnInit() {
  }
  onSubmit(value){
    this.Message = this.Message + value;
    }

}
