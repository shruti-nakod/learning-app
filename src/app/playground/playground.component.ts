import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @ViewChild('content', { static: true }) content: ElementRef;
  constructor() {}

  ngOnInit() {
    console.log('Projected content', this.content);
  }
}
