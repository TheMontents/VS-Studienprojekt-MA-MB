import { Component, OnInit } from '@angular/core';
import { Tobuy } from 'src/app/_interface/tobuy';

@Component({
  selector: 'app-template-tobuy',
  templateUrl: './template-tobuy.component.html',
  styleUrls: ['./template-tobuy.component.sass']
})
export class TemplateTobuyComponent implements OnInit {

  public toBuy$: Tobuy

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

  }

  public changeLabel(event?: any): void{
    console.log(this.toBuy$.label);
  }

  public deleteToBuy(event?: any): void{
    console.log(this.toBuy$.id);
  }

}
