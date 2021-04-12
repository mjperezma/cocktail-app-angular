import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICocktail } from "../interfaces/icocktail";
import { IFilter } from "../interfaces/ifilter";
import * as _ from 'lodash';
import { Cocktail } from "../models/cocktail.model";
import { map } from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})

export class CocktailService{
    constructor(private http: HttpClient) { }
    
    getCocktailsFilter(filter: IFilter) {
        const urlBase = "https://www.thecocktaildb.com/api/json/v1/1/";
        let aditionalUrl = "";

        if (filter.searchBy === 'name') {
            aditionalUrl = 'search.php?s=' + filter.value;
        } else {
            aditionalUrl = 'filter.php?';
            if (filter.searchBy === 'glass') {
                aditionalUrl += 'g=';
            } else if (filter.searchBy === 'category') {
                aditionalUrl += 'c='
            } else {
                aditionalUrl += 'i='
            }
            
            aditionalUrl += filter.value;
        }
        const finalUrl = urlBase + aditionalUrl;
        return this.http.get(finalUrl).pipe(map(data => this.parseData(_.get(data, 'drinks'))));
    }

    private parseData(listCocktails) {
        let newListCocktails = [];
        _.forEach(listCocktails, c => {
            let cocktail = new Cocktail(c);
            newListCocktails.push(cocktail)
             console.log(newListCocktails)
        });
        return newListCocktails;
       
    }
}