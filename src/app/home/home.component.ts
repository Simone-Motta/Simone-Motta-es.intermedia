import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';
import { DrinkService } from '../services/drink.service';

import { Drink } from '../model/drink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  drinks: Drink[] = []
  alphabet: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  titleLetter: string = "A"

  constructor(private apiService: ApiService, private drinkService: DrinkService, private router: Router) {}

  ngOnInit() {
      this.searchByFirstLetter()
  }

  searchByFirstLetter(firstLetter: string = 'A') {

    this.drinkService.getElencoDrinks(firstLetter).subscribe( (response: any) => {
        console.log(response)
        this.drinks = response.drinks;
    });

    this.titleLetter = firstLetter;
  }

  viewDetail(id: number) {
    this.router.navigate(['/detail', id])
    console.log("Id passato")
  }
  
}