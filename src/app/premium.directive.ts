import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

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

  //  @HostBinding('domProperty')
  @HostBinding('className')
  css: string;
}
