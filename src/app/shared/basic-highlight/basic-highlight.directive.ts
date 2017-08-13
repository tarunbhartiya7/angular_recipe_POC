import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]' //attribute directive
  // selector: 'appBasicHighlight' //element directive
  // selector: '.appBasicHighlight' //class directive
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    //But its not a good practice to access the DOM elements directly and manipulate styles
    //To manipulate styles you should use renderer
    //refer better-highlight directive
  }
}
