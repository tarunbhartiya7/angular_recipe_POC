/* Directive that adds a class open to dropdowns to shown or hide it */

import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
   
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}
