import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private _heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  get heroes(): Hero[] {
    return this._heroes;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this._heroes = heroes.slice(1, 5));
  }
}
