import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  predicate = true;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.predicate = !this.predicate;
    }, 1000);
  }
}
