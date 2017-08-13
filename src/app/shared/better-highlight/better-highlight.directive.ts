/*Directive to apply style on events using renderer*/
import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mEnter(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');    
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');    
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');    
  }

  @HostListener('mouseleave') mLeave(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');    
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');    
  }
}
