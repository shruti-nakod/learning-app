import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  //  @ViewChild('templateVariable') is a decorator for view query.
  //  Here static property determines when the query is resolved.
  //  Change detection cycle has a profound effect on view query.
  //  For this demonstration, we query it before the change detection.
  @ViewChild('para', { static: true }) pElement: ElementRef;

  constructor() {}

  ngOnInit() {
    //  pElement contains the native element which is the DOM node
    //  We can mutate the node's properties
    console.log('<p>', this.pElement);
  }
}
