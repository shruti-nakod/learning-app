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
  @HostListener('click')
  handler() {
    console.log('Directive handler called');
  }
}
