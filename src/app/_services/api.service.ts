import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DrinkApiResType, DrinkType } from '../_models/drink.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  private compareDrinkNames(a: DrinkType, b: DrinkType) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }

    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }

    return 0;
  }

  getDrinksByFirstLetter(firstLetter: string) {
    return this.http
      .get<DrinkApiResType>(`${this.BASE_URL}/search.php?f=${firstLetter}`)
      .pipe(
        map((res) => {
          if (!res.drinks) {
            return [];
          }

          return res.drinks
            .map((drink) => {
              return {
                id: drink.idDrink,
                name: drink.strDrink,
                category: drink.strCategory,
                image: drink.strDrinkThumb,
              } as DrinkType;
            })
            .sort(this.compareDrinkNames);
        })
      );
  }

  getRandomDrink() {
    return this.http.get<DrinkApiResType>(`${this.BASE_URL}/random.php`).pipe(
      map((res) => {
        const drink = res.drinks[0];
        return {
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          image: drink.strDrinkThumb,
        } as DrinkType;
      })
    );
  }
}
