import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DrinkDetailType } from '../_models/drink.model';
import { ApiService } from '../_services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DrinkByIdResolver implements Resolve<DrinkDetailType> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<DrinkDetailType> {
    return this.apiService.getDrinkById(route.paramMap.get('id')!);
  }
}
