import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  //  @HostBinding('domProperty')
  @HostBinding('className')
  get css() {
    return 'font-weight-bold';
  }

  @HostBinding('style.color')
  get color() {
    return 'blue';
  }
}
