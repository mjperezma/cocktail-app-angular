import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent implements OnInit {
  public showFilter:boolean;
  constructor() {
    this.showFilter = false;
   }

  ngOnInit() {
  }
  hideShowFilter(){
    this.showFilter = !this.showFilter;
  }
}
