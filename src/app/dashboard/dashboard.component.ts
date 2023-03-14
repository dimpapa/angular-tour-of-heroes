import { Component } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroResponse } from '../model/hero-response';
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
    this.heroService.getHeroes().subscribe((response: HeroResponse) => this._heroes = response.data.slice(1, 5));
  }
}
