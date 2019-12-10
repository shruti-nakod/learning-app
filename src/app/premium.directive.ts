import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  @Input() set appPremium(value: string) {
    this.css = value;
  }

  @Input() set dirProperty(value) {
    console.log('dirProperty set to', value);
  }

  @Output() directiveEvent = new EventEmitter();

  //  @HostBinding('domProperty')
  @HostBinding('className')
  css: string;

  @HostListener('click')
  clickHandler() {
    this.directiveEvent.emit({
      on: new Date(),
      message: 'Directive emitted custom event at click'
    });
  }
}
