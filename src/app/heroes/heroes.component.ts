import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = { // 类成员变量，状态
    id: 1,
    name: 'Windstorm'
  };
  heroes:Hero[] = HEROES;

  selectedHero: Hero;


  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
