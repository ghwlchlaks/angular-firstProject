import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
  
  /*
    이벤트를 처리하기 위해 사용한 @HostListener decorator 
    host는 appTextColor 속성을 적용한 HTML element
  */
  @HostListener('click', ['$event']) elementClick(e) {
    /* 
    e는 이벤트 객체,
    thissms directive객체
    */
    alert(e.srcElement.innerHTML);
  }

  constructor(elementref: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementref.nativeElement, 'color', 'darkred');
   }

}
