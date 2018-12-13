import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step1-search',
  templateUrl: './step1-search.component.html',
  styleUrls: ['./step1-search.component.css']
})
export class Step1SearchComponent implements OnInit {

  /*
  @input decorator
  bookCategory라는 이름으로 부모 Component(step1-main) property binding으로 전달해준 데이터를 받을 수 있다.
  만약, 다른 이름으로 사용하고 싶다면 @Input('상위컴포넌트값(bookCategory)') 사용할데이터이름 : 데이터타입(string);
  call by reference방식
  stateful component(상위 component) -데이터의 정보를 변경하거나 저장 할 수 있다. 
  stateless component(자식 component) - 공유된 자원을 변경해주어도 상위 component에섯 영향을 미치지 않는다.
  즉, @input decorator를 이용하면 부모 component에서 자식component에게 데이터를 전달 할 수 있지만 반대는 허용하지 않는다.
  */
  //@Input() bookCategory:string;
  

  //set을 이용하여 부로 컴포넌트에서 받은 데이터 가공
  _bookCategory: string;
  @Input()
  set bookCategory(value : string){
    if(value != null){
      this._bookCategory = 'category : ' + value;
    }else{
      this._bookCategory = value
    }
  }
  // data binding : Interpolation(단방향 바인딩) -> component에서 선언한 속성을 view에서 사용하는 것, ex) {{value}}
  keyword = 'angular';

  constructor() { }

  ngOnInit() {
  }

  //버튼을 클릭했을떄 keyword값이 변경됨
  setKeyword(keyword: string): void {
    this.keyword = keyword
  }

  inputChange(): void {
    //console.log("change")
  }
}
