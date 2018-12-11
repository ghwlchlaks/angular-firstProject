import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1-detail',
  templateUrl: './step1-detail.component.html',
  styleUrls: ['./step1-detail.component.css']
})
export class Step1DetailComponent implements OnInit {

  //step1 객체 생성
  step1 = {
    btitle : 'title입니다.',
    bauthor : '저자입니다.',
    bprice : '25000',
    bdate : '2018년 12월',
    bisbn : '1234-5678',
    bimgurl: 'http://image.hanbit.co.kr/cover/_m_1340m.gif'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
