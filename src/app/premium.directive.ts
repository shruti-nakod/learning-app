import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  @HostListener('click', ['$event'])
  handler(args) {
    console.log('Directive handler', args);
  }
}
