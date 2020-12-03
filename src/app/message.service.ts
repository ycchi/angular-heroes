import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  // stores messages data in this service 
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}