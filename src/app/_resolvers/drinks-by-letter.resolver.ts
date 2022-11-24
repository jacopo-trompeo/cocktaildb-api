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
export class DrinksByLetterResolver implements Resolve<DrinkType[]> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<DrinkType[]> {
    const firstLetter = localStorage.getItem('firstLetter') || 'A';
    return this.apiService.getDrinksByFirstLetter(firstLetter);
  }
}
