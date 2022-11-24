import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDrinksByFirstLetter('a').subscribe((res) => {
      console.log(res);
    });
  }
}
