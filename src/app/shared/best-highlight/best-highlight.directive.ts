import { ElementRef, HostListener, Input, OnInit } from '@angular/core';
/*using @HostBinding is the best way to manipulate the element property*/

import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})
export class BestHighlightDirective implements OnInit{
  //If u want to make directive as dynamic then use the input/output properties
  //we can meke the colors as dynamic
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'orange';

  @HostBinding('style.backgroundColor') background: string;
  @HostBinding('style.cursor') cursor: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.background = this.defaultColor;
  }
  
  @HostListener('mouseenter') mEnter(){
    this.cursor = 'pointer';
    this.background = this.highlightColor;
  }

  @HostListener('mouseleave') mLeave(){
    this.background = this.defaultColor;
    this.cursor = 'default';
  }
}
