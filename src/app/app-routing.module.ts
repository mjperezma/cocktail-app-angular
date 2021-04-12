import { ListCocktailsComponent } from './components/list-cocktails/list-cocktails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailCocktailComponent } from './components/list-cocktails/detail-cocktail/detail-cocktail.component';



const routes: Routes = [

{path: 'detail-cocktails/:id', component: DetailCocktailComponent },
{path: 'list-cocktails', component: ListCocktailsComponent},
{path: '**', pathMatch:'full', redirectTo: 'list-cocktail'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
