import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IngredientType } from '../_models/drink.model';
import { ApiService } from '../_services/api.service';

@Injectable({
  providedIn: 'root',
})
export class IngredientByNameResolver implements Resolve<IngredientType> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IngredientType> {
    return this.apiService.getIngredientByName(route.paramMap.get('name')!);
  }
}
