/*This directive accepts integer and decimal part as input and restricts user to enter any number above that
eg, say integer part is 5 and decimal is 2, then maximum integer length can be 5 and decimal part length can be 2*/

import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxlength]'
})
export class MaxlengthDirective {
  @Input() integerPart;
  @Input() decimalPart;
  
  constructor() { }

  decimalPoint: boolean = false;  //flag used to check if decimal point was entered or not

  @HostListener('keypress', ['$event']) keyPress(event: any){
    
    let inputChar = String.fromCharCode(event.charCode);
    let position = event.target.selectionStart;
    let a = event.target.value;
    let num = [a.slice(0, position), inputChar, a.slice(position)].join('');
    let [ integer, fraction ] = num.split('.');
    
    //case 1: check for integer
    if (integer && integer.length > this.integerPart) 
      event.preventDefault();

    //case 2: check for decimal
    if (fraction && fraction.length > this.decimalPart) 
      event.preventDefault();

    //case 3: check for decimal point -  user shuld not be allowed to enter two decimal points
    let number_of_decimalPoints = num.replace(/[^.]/g, "").length;
    if(number_of_decimalPoints > 1)
      event.preventDefault();

  }
}//end of class MaxlengthDirective
