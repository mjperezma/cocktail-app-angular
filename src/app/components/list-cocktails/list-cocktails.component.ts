import { Component, OnInit } from '@angular/core';
import { IFilter } from 'src/app/interfaces/ifilter';
import { Cocktail } from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent implements OnInit {
  public showFilter:boolean;
  public filter: IFilter;
  public listCocktails: Cocktail[];
  public loadCoocktail: boolean;
  public items: number;
  public page: number;
  constructor(private cocktailService: CocktailService) {
    this.showFilter = false;
    this.listCocktails = [];
    this.filter = {
      searchBy: 'name',
      value: ''
    }
    this.loadCoocktail = true;
    this.items = 12;
    this.page = 1;
   }

  ngOnInit() {
  }
  hideShowFilter(){
    this.showFilter = !this.showFilter;

  }
  filterData() {
    this.loadCoocktail = false;
    this.cocktailService.getCocktailsFilter(this.filter).subscribe(cocktails => {
      this.listCocktails = cocktails;
      this.loadCoocktail = true;
    })
  }
}
