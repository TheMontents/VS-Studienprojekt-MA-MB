import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventPing } from 'src/app/_interface/eventping';
import { Tobuy } from 'src/app/_interface/tobuy';

@Component({
  selector: 'app-template-tobuy',
  templateUrl: './template-tobuy.component.html',
  styleUrls: ['./template-tobuy.component.sass']
})
export class TemplateTobuyComponent implements OnInit {

  @Input() toBuy$: Tobuy;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.toBuy$ = {
      id: 1,
      label: "Hallo",
      status: false,
      position: 1
    };
   }

  ngOnInit(): void {
  }

  public changeCheck(event?: any): void{
    this.toBuy$.status = !this.toBuy$.status;
    const eventObject: EventPing = {
      label: 'check',
      object: this.toBuy$
    };
    this.ping.emit(eventObject);

  }

  public changeLabel(event?: any): void{
    const eventObject: EventPing = {
      label: 'label',
      object: this.toBuy$
    };
    this.ping.emit(eventObject);
  }

  public deleteToBuy(event?: any): void{
    const eventObject: EventPing = {
      label: 'delete',
      object: this.toBuy$
    };
    this.ping.emit(eventObject);
  }

  

}
