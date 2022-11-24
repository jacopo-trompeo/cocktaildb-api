import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DrinkApiResType, DrinkType } from '../_models/drink.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getDrinksByFirstLetter(firstLetter: string) {
    return this.http
      .get<DrinkApiResType>(`${this.BASE_URL}/search.php?f=${firstLetter}`)
      .pipe(
        map((res) => {
          return res.drinks.map((drink) => {
            return {
              id: drink.idDrink,
              name: drink.strDrink,
              category: drink.strCategory,
              image: drink.strDrinkThumb,
            } as DrinkType;
          });
        })
      );
  }
}
