import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appAlpamatch]'
})
export class AlpamatchDirective { 
  constructor(el: ElementRef) {}
   ngOnInit(){
   }
   re = new RegExp("[A-Z]+")
   @HostListener('ngModelChange', ['$event'])
   onModelChange(event) {
     
   }
}
