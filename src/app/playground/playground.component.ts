import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get css(): object {
    return {
      'font-weight-bold': true,
      'font-italic': false,
      'text-primary': true
    };
  }
}
