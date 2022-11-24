import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkDetailType } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  drink!: DrinkDetailType;
  emptyResult = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ drink }) => {
      if (Object.keys(drink).length === 0) {
        this.emptyResult = true;
        return;
      }

      this.drink = drink;
    });
  }
}
