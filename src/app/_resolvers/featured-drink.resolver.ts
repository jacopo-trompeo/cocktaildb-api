import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DrinkType } from '../_models/drink.model';
import { ApiService } from '../_services/api.service';

@Injectable({
  providedIn: 'root',
})
export class FeaturedDrinkResolver implements Resolve<DrinkType> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<DrinkType> {
    return this.apiService.getRandomDrink();
  }
}
