import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkType, IngredientType } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent implements OnInit {
  drinks: DrinkType[] = [];
  ingredientDetails!: IngredientType;
  emptyResult = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getIngredientDetails();
    this.getDrinksByIngredient();
  }

  getIngredientDetails() {
    this.route.data.subscribe(({ ingredient }) => {
      if (Object.keys(ingredient).length === 0) {
        this.emptyResult = true;
        return;
      }

      this.ingredientDetails = ingredient;
    });
  }

  getDrinksByIngredient() {
    this.route.data.subscribe(({ drinks }) => {
      this.drinks = drinks;
    });
  }
}
