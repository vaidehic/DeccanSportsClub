import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private e1 : ElementRef) {
    e1.nativeElement.style.backgroundColor = "pink";
   }

}
