import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';
import { DrinkType, IngredientType } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent implements OnInit {
  drinks: DrinkType[] = [];
  ingredientDetails!: IngredientType;
  emptyResult = false;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const ingredient = this.route.snapshot.paramMap.get('name') || '';

    this.getIngredientDetails(ingredient);
    this.getDrinksByIngredient(ingredient);
  }

  getIngredientDetails(ingredient: string) {
    this.apiService.getIngredientByName(ingredient).subscribe((ingredient) => {
      if (!ingredient) {
        this.emptyResult = true;
        return;
      }

      this.ingredientDetails = ingredient;
    });
  }

  getDrinksByIngredient(ingredient: string) {
    this.apiService.getDrinksByIngredient(ingredient).subscribe((drinks) => {
      this.drinks = drinks;
    });
  }
}
