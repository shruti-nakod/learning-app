import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @ViewChild('para', { static: true }) pElement: ElementRef;
  @Input() counter;

  constructor() {}

  ngOnInit() {
    this.pElement.nativeElement.className = 'font-weight-bold';
    this.pElement.nativeElement.style.color = 'green';
    this.pElement.nativeElement.style.textDecoration = 'underline';
    this.pElement.nativeElement.style.fontSize = '30px';
  }
}
