import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DrinkComponent } from './pages/drink/drink.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';

import { DrinkByIdResolver } from './_resolvers/drink-by-id.resolver';
import { FeaturedDrinkResolver } from './_resolvers/featured-drink.resolver';
import { DrinksByLetterResolver } from './_resolvers/drinks-by-letter.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      featuredDrink: FeaturedDrinkResolver,
      drinks: DrinksByLetterResolver,
    },
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
