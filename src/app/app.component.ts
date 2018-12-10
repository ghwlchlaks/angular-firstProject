import { Component } from '@angular/core';

/*
@component -> java annotation 과 하는 일이 유사. 해당 클래스를 component로 인식, @angular/core 패키지에서 제공
@metadata:selector -> template 코드안에서 해당 component를 사용하려고 할때 사용할 Element tag , 예) index.html 에서 <app-root></app-root>로 컴포넌트 사용 
@metadata:template or templateUrl -> view를 렌더링 할때 필용한 html, 즉 컴포넌트에 html 예) app.component.html
@metadata:styles or styleUrls -> component html에대한 style(css, ..), 여러 css사용가능하므로 배열 형태로 가능 
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myAngular';
}
