import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messages: string[] = [];

  constructor() { }

  get messages(): string[] {
    return this._messages;
  }

  add(message: string): void {
    this._messages.push(message);
    return;
  }

  clear(): void {
    this._messages = [];
    return;
  }
}
