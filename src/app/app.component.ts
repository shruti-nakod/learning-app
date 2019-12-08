import {
  Component,
  ViewChild,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { PlaygroundComponent } from './playground/playground.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(PlaygroundComponent)
  playgroundList: QueryList<PlaygroundComponent>;

  title = 'ng-directives-demo';

  clickHandler(): void {
    this.playgroundList.forEach((p, i) => {
      p.counter *= 2;
      p.pElement.nativeElement.className = 'font-italic';
    });
  }
}
