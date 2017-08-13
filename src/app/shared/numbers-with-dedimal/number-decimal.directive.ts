import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberDecimal]'
})
export class NumberDecimalDirective {

  constructor() { }

  @HostListener('keypress', ['$event']) keyPress(event: any){
    const pattern = /[^\.0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
  
}
