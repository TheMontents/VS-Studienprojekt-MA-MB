import { Component, OnInit } from '@angular/core';
import { Tobuy } from 'src/app/_interface/tobuy';

@Component({
  selector: 'app-template-tobuy-form',
  templateUrl: './template-tobuy-form.component.html',
  styleUrls: ['./template-tobuy-form.component.sass']
})
export class TemplateTobuyFormComponent implements OnInit {

  public toBuy$: Tobuy;

  constructor() {
    this.toBuy$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    };
    
   }

  ngOnInit(): void {
  }

  public createToBuy(event?: any): void {
   
    this.toBuy$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    };
    console.log(this.toBuy$);
  }
  

}
