import { Component, OnInit } from '@angular/core';
//import { Name } from '../Component1';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit  {

 
  onSubmit(value){
    //var value = (document.getElementById("myText") as HTMLInputElement).value;
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
