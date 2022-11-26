import { Component, Input } from '@angular/core';
import { DrinkType } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
})
export class DrinkListComponent {
  @Input() drinks: DrinkType[] = [];
}
