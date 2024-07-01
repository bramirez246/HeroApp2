import { Component, Input} from '@angular/core';
import { HeroInfo } from '../interfaces/hero-info';

@Component({
  selector: 'app-hero-info',
  standalone: true,
  imports: [],
  templateUrl: './hero-info.component.html',
  styleUrl: './hero-info.component.scss'
})
export class HeroInfoComponent {
  @Input() heroInfo!: HeroInfo;
}
