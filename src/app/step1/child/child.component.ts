import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck{
  //lifecycle 테스트

  @Input() myInput: string;
  myString= "hello";
  
  //component 혹은 directive가 생성될 떄 호출
  constructor() { 
    console.log(`constructor 호출 ${this.myInput}`);
  }

  //@Input값이 변경될때마다 호출
  //ngOnchanges -component에서 발생하는 모든 상태 변화에 반응하여 호출
  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(`ngOnChanges 호출 ${this.myInput}`);
    //변경되기 이전값
    console.log(simpleChanges.myInput.previousValue);
    //변경 된 이후 값
    console.log(simpleChanges.myInput.currentValue);
  }

  /*
  angular에서 사용하는 속성의 초기화는 ngOnInit에서..
  ngOnChanges가 호출된 이후에 모든 속성에 대한 초기화가 완료된 시점 한번 호출
  */
  ngOnInit() {
    console.log(`ngOnChanges 호출 ${this.myInput}`);
    //속성 초기화는 여기서
    console.log(`ngOnInit 호출 ${this.myString}`);
  }

  /*
  ngOnChanges와는 다르게 primitive값변경, reference객체의 변경, reference객체의 속성변경에대한 모든 변경에대해 호출됨
  심지어 이전값과 같은 값이 할당되어도 호출, 즉, ngDoCheck을 많이 사용하게 되면 성능 저하가 될 수 있음.
  */
  ngDoCheck() {
    console.log(`ngDoCheck 호출 ${this.myInput}`);
    console.log(`ngDoCheck 호출 ${this.myString}`);
  }

  /*
  ngAfterContentInit, ngAfterContentChecked는 ngDoCheck이 호출된 후 한번만 호출됨
  부모 component 의 template일부를 자식 component에서 projection한 후 호출
  */
  ngAfterContentInit() {
    console.log(`ngAfterContentInit 호출`);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked 호출`);
  }


  /*
    component에 속한 모든 view와 viewchild가 시작되고나서 호출 
    즉, html이 화면에 모두 출력된 후 호출
  */
  ngAfterViewInit() {
    console.log(`ngAfterViewInit 호출`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked 호출`);
  }


  /*
    component가 소멸하기 직전 호출
    일반적으로 사용된 자원에 대한 해제 코드 작성
  */
  ngOnDestroy() {
    console.log(`ngOnDestroy 호출`);
  }
}
