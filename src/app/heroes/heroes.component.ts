import { Component } from '@angular/core';

import { Hero } from '../model/hero';
import { HeroResponse } from '../model/hero-response';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  constructor(private heroService:HeroService, private messageService: MessageService) {}

  heroes: Hero[] = [];
  // selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe( (response:HeroResponse) => this.heroes = response.data);
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`Hero (component): Selected hero: ${hero.name}`);
  // }
}
