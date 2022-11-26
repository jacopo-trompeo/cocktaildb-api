import { Component } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { DrinkType } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchQuery!: string;
  drinks: DrinkType[] = [];

  constructor(private apiService: ApiService) {}

  searchDrinks() {
    this.apiService.getDrinksByName(this.searchQuery).subscribe((drinks) => {
      this.drinks = drinks;
      this.searchQuery = '';
    });
  }
}
