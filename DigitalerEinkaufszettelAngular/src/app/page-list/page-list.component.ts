import { Component, OnInit } from '@angular/core';
import { EventPing } from '../_interface/eventping';
import { Tobuy } from '../_interface/tobuy';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

  public toBuyShow: boolean;
  public toBuyDoneShow: boolean;
  public $toBuys: Tobuy[];
  public $toBuysDone: Tobuy[];

  constructor() {
    this.toBuyShow = true;
    this.toBuyDoneShow = false;
    this.$toBuys = [
      {
        id: 0,
        label: 'test',
        status: false,
        position: 1
      },
      {
        id: 1,
        label: 'test 2',
        status: false,
        position: 1
      }

    ];
    this.$toBuysDone = [];
   }

  ngOnInit(): void {
  }
  public create(event: Tobuy): void{
    event.position = this.$toBuys.length + 1;
    this.$toBuys.push(event);
  }

  public update(event: EventPing): void{
    if ('check' === event.label){
      if(!event.object.status){
        this.$toBuysDone.splice(this.$toBuysDone.indexOf(event.object),1);
        this.$toBuys.push(event.object);
      }else
      {
        this.$toBuys.splice(this.$toBuys.indexOf(event.object),1);
        this.$toBuysDone.push(event.object)
      }
    }
  
    if ('delete' === event.label){
      if(event.object.status){
        this.$toBuysDone.splice(this.$toBuysDone.indexOf(event.object),1);
      }else
      {
        this.$toBuys.splice(this.$toBuys.indexOf(event.object),1);
      }
    }
    if ('label' === event.label){
      if(event.object.status){
        this.$toBuysDone.forEach((tobuy: Tobuy)=>{
          if(tobuy.id === event.object.id){
            tobuy.label = event.object.label;
          }
        });
      }else
      {
        this.$toBuys.forEach((tobuy: Tobuy)=>{
          if(tobuy.id === event.object.id){
            tobuy.label = event.object.label;
          }
        });
      
      }
    }
    console.log(this.$toBuys);
  }
  

}
