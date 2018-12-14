import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//http service import
import {HttpSupportService} from '../http-support.service';
import {JSON_DATA_CONFIG, JsonConfig} from './json-config';

@Component({
  selector: 'app-step1-search',
  templateUrl: './step1-search.component.html',
  styleUrls: ['./step1-search.component.css'],
  providers: [
    //angular framework에 어떤 클래스가 injection 됐는지 알려주는 역할 
    HttpSupportService,
    {
      provide : JsonConfig,
      useValue: JSON_DATA_CONFIG
    }
  ]
})
export class Step1SearchComponent implements OnInit {

  /*
  @input decorator
  bookCategory라는 이름으로 부모 Component(step1-main) `property binding`으로 전달해준 데이터를 받을 수 있다.
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

  /*
  @Output decorator
  자식 component에서 부모 component로 데이터를 전달하는 방식
  전달하기 위해서는 EventEmitter를 이용한 이벤트처리를 해야한다. 
  `event binding`을 이용해 데이터를 받는 방식
  */
  @Output() searchEvent = new EventEmitter();

  // data binding : Interpolation(단방향 바인딩) -> component에서 선언한 속성을 view에서 사용하는 것, ex) {{value}}
  keyword = 'angular';

  //consutructor을 이용해 http service가 injection
  constructor(private httpSupportService : HttpSupportService,
    private jsonConfig: JsonConfig) { }

  ngOnInit() {
  }

  //버튼을 클릭했을떄 keyword값이 변경됨
  setKeyword(keyword: string): void {
    this.keyword = keyword;
    //search버튼을 눌렀을때 발생하는 이벤트로 이 안에 부모component에게 전달할 데이터를 인자로 넣어준다.
    this.searchEvent.emit({
      keyword : `${this.keyword}`,
      category : `${this._bookCategory.replace('category: ', '')}`
    })

    //injection 받은 service의 메소드를 실행
    this.httpSupportService.getJsonData();

    this.httpSupportService.getJsonConfig(this.jsonConfig.url, this.jsonConfig.name);
  }

  inputChange(): void {
    //console.log("change")
  }
}
