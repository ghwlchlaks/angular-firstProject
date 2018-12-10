import { BrowserModule } from '@angular/platform-browser'; //web browser를 위한 module , root module을 browser module을 반드시 import 해야 한다. 
import { NgModule } from '@angular/core'; //@ decorator 

import { AppComponent } from './app.component'; // app.component.ts파일에서 AppComponent import

/*
@NgModule -> 해당 클래스가 모듈이란것을 명시
metadata:bootstrap -> root module만 가지고있는 property, application이 시작될때 root module에 의해서 어떤 component가 사용될것인지 배열로 선언
예) index.html을 읽어들일때 사용할 초기 렌더링 component 명시
metadata:declarations : 사용하는 component를 등록해야 component의 typescript코드를 브라우저에서 실행 가능한 javascript코드로 compile한다.
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/*
Root Module
*/
export class AppModule { }
