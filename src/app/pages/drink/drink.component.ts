import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';
import { DrinkDetailType } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  drink!: DrinkDetailType;
  emptyResult = false;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';

    this.apiService.getDrinkById(id).subscribe((drink) => {
      if (!drink) {
        this.emptyResult = true;
        return;
      }

      this.drink = drink;
    });
  }
}
