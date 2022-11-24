import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { DrinkType } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  firstLetter!: string;
  paginationLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  drinks: DrinkType[] = [];
  featuredDrink: DrinkType = {} as DrinkType;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.firstLetter = localStorage.getItem('firstLetter') || 'A';

    this.getFeaturedDrink();
    this.getDrinksByFirstLetter();
  }

  getDrinksByFirstLetter(firstLetter: string = this.firstLetter) {
    this.firstLetter = firstLetter;
    localStorage.setItem('firstLetter', this.firstLetter);

    this.apiService
      .getDrinksByFirstLetter(this.firstLetter)
      .subscribe((drinks) => {
        this.drinks = drinks;
      });
  }

  getFeaturedDrink() {
    this.apiService.getRandomDrink().subscribe((drink) => {
      this.featuredDrink = drink;
    });
  }
}
