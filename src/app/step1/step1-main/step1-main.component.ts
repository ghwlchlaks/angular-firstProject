import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
//child view에 객체를 직접 접근 하기위한 참조
import {Step1SearchComponent} from '../step1-search/step1-search.component';
import { HttpSupportService } from "../http-support.service";
@Component({
  selector: 'app-step1-main',
  templateUrl: './step1-main.component.html',
  styleUrls: ['./step1-main.component.css'],
  /*
  [중요!]
  main이 상위 컴포넌트이기 때문에 providers를 선언해주어야한다. 
  만약 하위 컴포넌트마다 providers를 선언한다면 서로다른 providers를 가져 데이터 공유를 할 수가 없다.
  */
  providers:[HttpSupportService]
})
export class Step1MainComponent implements OnInit {

  searchTitle = null;
  selectedValue = null;
  displayCategoryName = null;
  bookCategory = [
    {value: 'all', viewValue: '국내외도서'},
    {value: 'country', viewValue: '국내도서'},
    {value: 'foreign', viewValue: '국외도서'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

  changeValue(category: string): void {
    for (let element of this.bookCategory){
      if(element.value == category) {
        this.displayCategoryName = element.viewValue;
      }
    }
  }

  changeTitleBar(searchInfo) : void {
    this.searchTitle = `${searchInfo.keyword} ( ${searchInfo.category})`;
  }

  /*
  자식 component 객체에 `직접` 접근하는 방법
  @viewchild decorator를 이용할 경우 부합되는 객체 한개만 접근가능
  @viewChildren decorater를 이용할 경우 부합되는 객체를 모두 참음. QueryList형태로 객체집합을 얻을수 있음. toArray()메소드를 통해 배열을 얻어내서 사용
  하지만 Component의 view가 변경되면 Component를 처리하는 부분도 맞게 바뀌어야한다. component의 재사용성과 유지보수성에 문제가 생길 여지가 있으므로 지양하는 것이 좋음
  */
  @ViewChild(Step1SearchComponent) searchComp : Step1SearchComponent;
  @ViewChildren(Step1SearchComponent) searchCompArr : QueryList<Step1SearchComponent>;
  clearCondition(): void {
    this.selectedValue = null;
    this.searchTitle = null;
    /*
      @viewChild를 사용할 경우
      this.searchComp._bookCategory = null;
      this.searchComp.keyword = null;
    */
    // @ViewChildren을 사용할 경우 
    this.searchCompArr.toArray()[0]._bookCategory = null;
    this.searchCompArr.toArray()[0].keyword = null;
  }

  /*
    #resultStatus값을 참조하여 DOM을 직접 제어할 수 있다.
  */
  @ViewChild('resultStatus') resultToolbar : ElementRef;
  changeDOM(): void {
    this.resultToolbar.nativeElement.onclick = function() {
      alert("DOM을 직접 제어할 수 있어요");
    }
    this.resultToolbar.nativeElement.innerHTML = "클릭해보세요";
  }
}
