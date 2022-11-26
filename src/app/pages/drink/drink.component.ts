import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkDetailType } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  drink!: DrinkDetailType;
  initialLanguage = 'EN';
  currentInstructions!: { text: string; language: string };
  emptyResult = false;

  constructor(private route: ActivatedRoute) {}

  selectLanguage(language: string = this.initialLanguage) {
    this.currentInstructions =
      this.drink.instructions.find(
        (instruction) => instruction.language === language
      ) || this.drink.instructions[0];
  }

  ngOnInit() {
    this.route.data.subscribe(({ drink }) => {
      if (Object.keys(drink).length === 0) {
        this.emptyResult = true;
        return;
      }

      this.drink = drink;
      this.selectLanguage();
    });
  }
}
