import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // service injected here but not defined/used in component logic - used in template
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}