import { Component, OnInit } from '@angular/core';
import { EventPing } from '../_interface/eventping';
import { Tobuy } from '../_interface/tobuy';
import { DataService } from '../_service/data.service';
import { Subscription } from 'rxjs';

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

  constructor(public _dataService: DataService) {
    this.toBuyShow = true;
    this.toBuyDoneShow = false;
    this.$toBuys = [];
    this.$toBuysDone = [];
    this.loadData();
   }

  ngOnInit(): void {
  }

  public loadData():void {
    this.$toBuys = [];
    this.$toBuysDone = [];
    this._dataService.getToBuy().subscribe((data: Tobuy[]) =>{
      this.$toBuys = data;
    }, error =>{
      console.log(`%cERROR: ${error.message}`, `color: read; font-size: 12px;`);
    });

  }

  public create(event: Tobuy): void{
   
   this._dataService.postToBuy(event).subscribe((data: Tobuy) =>{
      this.$toBuys.push(data);
    }, error =>{
      console.log(`%cERROR: ${error.message}`, `color: read; font-size: 12px;`);
    });
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
          if(tobuy.articleId === event.object.articleId){
            tobuy.article = event.object.article;
          }
        });
      }else
      {
        this.$toBuys.forEach((tobuy: Tobuy)=>{
          if(tobuy.articleId === event.object.articleId){
            tobuy.article = event.object.article;
          }
        });
      
      }
    }
    console.log(this.$toBuys);
  }
  

}
