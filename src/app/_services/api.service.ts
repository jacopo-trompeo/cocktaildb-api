import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {
  DrinkApiResType,
  DrinkDetailType,
  DrinksByIngredientApiResType,
  DrinkType,
  IngredientApiResType,
  IngredientType,
} from '../_models/drink.model';

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

  getDrinkById(id: string) {
    return this.http
      .get<DrinkApiResType>(`${this.BASE_URL}/lookup.php?i=${id}`)
      .pipe(
        map((res) => {
          if (!res.drinks) {
            return {} as DrinkDetailType;
          }

          const drink = res.drinks[0];

          const ingredients = [];
          const instructions = [];

          for (const key in drink) {
            const keyName = key as keyof typeof drink;

            if (key.startsWith('strIngredient') && drink[keyName]) {
              const index = keyName.replace('strIngredient', '');
              const measureKey = `strMeasure${index}` as keyof typeof drink;
              ingredients.push({
                name: drink[keyName],
                measure: drink[measureKey] || '',
              });
            }

            if (key.startsWith('strInstructions') && drink[keyName]) {
              let language = keyName.replace('strInstructions', '') || 'EN';

              instructions.push({
                language,
                text: drink[keyName],
              });
            }
          }

          return {
            id: drink.idDrink,
            name: drink.strDrink,
            category: drink.strCategory,
            image: drink.strDrinkThumb,
            ingredients,
            instructions,
          } as DrinkDetailType;
        })
      );
  }

  getDrinksByName(name: string) {
    return this.http
      .get<DrinkApiResType>(`${this.BASE_URL}/search.php?s=${name}`)
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

  getDrinksByIngredient(ingredient: string) {
    return this.http
      .get<DrinksByIngredientApiResType>(
        `${this.BASE_URL}/filter.php?i=${ingredient}`
      )
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
                image: drink.strDrinkThumb,
              } as DrinkType;
            })
            .sort(this.compareDrinkNames);
        })
      );
  }

  getIngredientByName(name: string) {
    return this.http
      .get<IngredientApiResType>(`${this.BASE_URL}/search.php?i=${name}`)
      .pipe(
        map((res) => {
          if (!res.ingredients) {
            return {} as IngredientType;
          }

          const ingredient = res.ingredients[0];

          return {
            name: ingredient.strIngredient,
            description: ingredient.strDescription,
            type: ingredient.strType,
            alcohol: ingredient.strAlcohol,
            abv: ingredient.strABV,
            image: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`,
          } as IngredientType;
        })
      );
  }
}
