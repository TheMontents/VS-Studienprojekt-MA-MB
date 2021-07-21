import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventPing } from 'src/app/_interface/eventping';
import { Tobuy } from 'src/app/_interface/tobuy';
import { DataService } from 'src/app/_service/data.service';

@Component({
  selector: 'app-template-tobuy',
  templateUrl: './template-tobuy.component.html',
  styleUrls: ['./template-tobuy.component.sass']
})
export class TemplateTobuyComponent implements OnInit {

  @Input() toBuy$: Tobuy;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor(public _dataService: DataService) {
    this.toBuy$ = {
      articleId: 1,
      article: "Hallo",
      status: false,
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
    this._dataService.deleteToBuy(this.toBuy$).subscribe((data: Tobuy) => {
      const eventObject: EventPing = {
        label: 'delete',
        object: this.toBuy$
      };
      this.ping.emit(eventObject);
  }, error => {
      console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
  });
  }

  

}
