import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1-search',
  templateUrl: './step1-search.component.html',
  styleUrls: ['./step1-search.component.css']
})
export class Step1SearchComponent implements OnInit {

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
