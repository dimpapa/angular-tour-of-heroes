import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { HeroResponse } from '../model/hero-response';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  
  // @Input() hero?:Hero;

  hero?: Hero;

  constructor(
    private _route: ActivatedRoute,
    private _heroService: HeroService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._heroService.getHero(id).subscribe((response: HeroResponse) => {
      if ( response.count === 1) {
        this.hero = response.data[0];
      }
    });
  }

  goBack(): void {
    this._location.back();
  }
}
