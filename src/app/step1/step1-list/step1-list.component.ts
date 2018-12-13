import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface IBook {
  bauthor : string;
  bdate : string;
  btranslate: string;
  bpublisher: string;
  btitle : string;
  bprice : number;
  bisbn : string;
  bimgurl : string;
}

@Component({
  selector: 'app-step1-list',
  templateUrl: './step1-list.component.html',
  styleUrls: ['./step1-list.component.css']
})
export class Step1ListComponent implements OnInit {

  books : IBook[];

  //assets/data/book.json에 정보를 가져옴
  constructor(private http: HttpClient) { 
    this.http.get<IBook[]>('assets/data/book.json').subscribe(res => this.books =res);
  }

  ngOnInit() {
  }

}
