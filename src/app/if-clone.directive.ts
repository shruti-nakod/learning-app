import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIfClone]'
})
export class IfCloneDirective {
  //  Here the structural directive should take:
  //  1. TemplateRef<any> // the ng-template created either explicitly or implicitly
  //  2. ViewContainerRef //  reference to the whole template
  //  It generally exposes the predicate as @Input() with same selector name
  //  Usually it is a setter attached to @Input, which will trigger as soon as the value is provided
  //  Otherwise, for property bound values, ngOnChanges hook can be used
  //  Based on the value supplied, make a decision whether to render the TemplateRef or not

  @Input() set appIfClone(predicate: boolean) {
    if (predicate) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear(); //  clears all views created by this
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
