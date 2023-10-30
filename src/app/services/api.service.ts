import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	 providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) {}

    /**
     * API RICERCA DRINK PER LETTERA
     * 
     * @param firstLetter 
     * @returns 
     */
    searchByF(firstLetter: string) {
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter)
    }

    /**
     * API RICERCA DRINK PER ID
     * 
     * @param id 
     * @returns 
     */
    searchById(id: number) {
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
    }

}