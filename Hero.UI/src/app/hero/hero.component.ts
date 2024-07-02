import { Component } from '@angular/core';
import { HeroInfo } from '../interfaces/hero-info';
import { HeroInfoComponent } from '../hero-info/hero-info.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroInfoComponent, NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  heroList: HeroInfo[] = [
    {
      id: 0,
      name: "Deadpool",
      firstName: "Wade",
      lastName: "Wilson",
      birthplace: "Canada",
      universe: "Marvel",
      isFavorite: true
    },
    {
      id: 1,
      name: "God of Thunder",
      firstName: "Thor",
      lastName: "Odinson",
      birthplace: "Asgard",
      universe: "Marvel",
      isFavorite: true
    },
    {
      id: 2,
      name: "Nightwing",
      firstName: "Rirchard",
      lastName: "Grayson",
      birthplace: "Some circus or something",
      universe: "DC",
      isFavorite: false
    },
    {
      id: 3,
      name: "Batman",
      firstName: "Bruce",
      lastName: "Wayne",
      birthplace: "Gotham",
      universe: "DC",
      isFavorite: true
    },
    {
      id: 4,
      name: "Superman",
      firstName: "Kal-El",
      lastName: "Kent",
      birthplace: "Krypton",
      universe: "DC",
      isFavorite: true
    },
    {
      id: 5,
      name: "Ghost Rider",
      firstName: "Johnny",
      lastName: "Blaze",
      birthplace: "Wukegan, Illinois",
      universe: "Marvel",
      isFavorite: true
    },
  ];
}
