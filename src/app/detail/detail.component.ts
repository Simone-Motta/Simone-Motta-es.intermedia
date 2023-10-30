import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { DrinkService } from '../services/drink.service';

import { Drink } from '../model/drink.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  drinks: Drink[] = [];
  langIstr: string = 'en';

  constructor(private http: HttpClient, private route: ActivatedRoute, private drinkService: DrinkService) {}

  ngOnInit() {
    //this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200').subscribe( (response: any) => {
    //  console.log(response)
		//	this.drinks = response.drinks;
		//});

    this.route.paramMap.subscribe(params => {

      const drinkIdString = params.get('idDrink')
      console.log(drinkIdString)

      if (drinkIdString) {
        const drinkId = parseInt(drinkIdString)
        this.drinkService.getDetailDrinks(drinkId).subscribe((response: any) => {
          console.log(response);
          this.drinks = response.drinks
        })  
      }
    
    })

    this.translate()
  }

  translate(lang: string = 'en') {
    this.langIstr = lang
  }

}