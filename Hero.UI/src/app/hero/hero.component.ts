import { Component, inject } from '@angular/core';
import { HeroInfo } from '../interfaces/hero-info';
import { HeroInfoComponent } from '../hero-info/hero-info.component';
import { NgFor } from '@angular/common';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroInfoComponent, NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  heroList: HeroInfo[] = [];
  heroService: HeroService = inject(HeroService);

  constructor(){
    this.heroList = this.heroService.getAllHeroes();
    console.log(this.heroList);
  }
}
