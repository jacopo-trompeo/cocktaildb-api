import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DrinkComponent } from './pages/drink/drink.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';

import { DrinkByIdResolver } from './_resolvers/DrinkById.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'drinks/:id',
    component: DrinkComponent,
    resolve: {
      drink: DrinkByIdResolver,
    },
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'ingredients/:name',
    component: IngredientComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
