import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

  public toBuyShow: boolean;
  public toBuyDoneShow: boolean;

  constructor() {
    this.toBuyShow = true;
    this.toBuyDoneShow = false;
   }

  ngOnInit(): void {
  }

}
