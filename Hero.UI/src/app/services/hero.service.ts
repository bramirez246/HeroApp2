import { Injectable } from '@angular/core';
import { HeroInfo } from '../interfaces/hero-info';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { 
    
  }

  public getAllHeroes(): HeroInfo[] {
    let heroList: HeroInfo[] = [
      {
        id: 0,
        name: "Deadpool",
        firstName: "Wade",
        lastName: "Wilson",
        birthplace: "Canada",
        universe: "Marvel",
        isFavorite: true,
      },
      {
        id: 1,
        name: "Ghost Rider",
        firstName: "Johnny",
        lastName: "Blaze",
        birthplace: "Illinois",
        universe: "Marvel",
        isFavorite: true,
      },
    ];

    return heroList;
  }
}
