import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventPing } from 'src/app/_interface/eventping';
import { Tobuy } from 'src/app/_interface/tobuy';

@Component({
  selector: 'app-template-tobuy-form',
  templateUrl: './template-tobuy-form.component.html',
  styleUrls: ['./template-tobuy-form.component.sass']
})
export class TemplateTobuyFormComponent implements OnInit {

  public toBuy$: Tobuy;
  @Output() ping: EventEmitter<Tobuy> = new EventEmitter<Tobuy>();

  constructor() {
    this.toBuy$ = {
      article: undefined,
      status: false,
    };
    
   }

  ngOnInit(): void {
  }

  public createToBuy(event?: any): void {
   this.ping.emit(this.toBuy$);
    this.toBuy$ = {
      article: undefined,
      status: false,
    };
  }
  

}
