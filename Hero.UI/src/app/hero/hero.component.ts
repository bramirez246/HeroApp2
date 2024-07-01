import { Component } from '@angular/core';
import { HeroInfo } from '../interfaces/hero-info';
import { HeroInfoComponent } from '../hero-info/hero-info.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroInfoComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  hero: HeroInfo = {
    id: 1,
    name: "Deadpool",
    firstName: "Wade",
    lastName: "Wilson",
    birthplace: "Canada",
    universe: "Marvel",
    isFavorite: true
  };
}
