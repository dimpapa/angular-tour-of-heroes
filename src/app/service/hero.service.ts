import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../model/hero';
import { HeroResponse } from '../model/hero-response';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // URL to web api
  private _heroesUrl = 'http://localhost:3000/api/heroes';

  constructor(
    private _http: HttpClient,
    private _messageService: MessageService
  ) { }

  /** GET heroes from the server */
  getHeroes(): Observable<HeroResponse> {
    return this._http.get<HeroResponse>(this._heroesUrl);
  }

  getHero(id: number): Observable<HeroResponse> {
    return this._http.get<HeroResponse>(`${this._heroesUrl}/id/${id}`);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this._messageService.add(`Hero (service): ${message}`);
  }
}
