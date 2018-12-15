import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import {HttpSupportService} from '../http-support.service';

interface IBook {
  bauthor : string;
  bdate : string;
  btitle: string;
  btranslator : string;
  bpublisher : string;
  bprice : string;
  bisbn : string;
  bimgurl : string;
}

@Component({
  selector: 'app-step1-list',
  templateUrl: './step1-list.component.html',
  styleUrls: ['./step1-list.component.css']
})
export class Step1ListComponent implements OnInit {

  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books : IBook[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //assets/data/book.json에 정보를 가져옴
  // constructor(private http: HttpClient) { 
  //   this.http.get<IBook[]>('assets/data/book.json').subscribe(res => {
  //     //book.json을 books객체에 저장
  //     this.books= res;
  //     // dataSource 객체화, typeScript를 사용하기 때문에 interface이용
  //     this.dataSource = new MatTableDataSource<IBook>(this.books);
  //     this.dataSource.paginator = this.paginator;
  //   });
  // }
  constructor(private httpSupportService:HttpSupportService) {
    this.httpSupportService.updateBooks.subscribe(data => {
    /*
      updateBooks를 구독하고 있다가 데이터가 변경되면 변경된 데이터를 자동으로 가져옴.
      아래 getData처럼 getBooks라는 메소드를 만들어서 사용하지 않아도됨
    */
      this.books = data;
      this.dataSource = new MatTableDataSource<IBook>(this.books);
      this.dataSource.paginator = this.paginator;
    })
  }

  getData(): void {
    this.books = this.httpSupportService.getBooks();
    console.log(this.books)
    this.dataSource = new MatTableDataSource<IBook>(this.books);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }

}
