import { Component } from '@angular/core';
import { HeroInfoComponent } from '../hero-info/hero-info.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroInfoComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
}
