import { Output, EventEmitter } from '@angular/core';
/*Add comma to numbers on Blur and remove comma on focus*/
/*accepts only strings*/
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appComaFormatter]'
})
export class ComaFormatterDirective {
  constructor() { }

  @HostListener('blur', ['$event']) onBlur(event: any){
    let parts = event.target.value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    event.target.value = parts.join('.');
  }

  @HostListener('focus', ['$event']) onFocus(event: any){
    let parts = event.target.value.split('.');
    parts[0] = parts[0].replace(/,/g, "");
    event.target.value = parts.join('.');
  }

}
