import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import {HttpSupportService} from '../http-support.service';
import { SelectionModel } from '@angular/cdk/collections';

interface IBook {
  bauthor : string;
  bdate : string;
  btranslator : string;
  bpublisher : string;
  btitle: string;
  bprice : number;
  bisbn : string;
  bimgurl : string;
}

@Component({
  selector: 'app-step1-list',
  templateUrl: './step1-list.component.html',
  styleUrls: ['./step1-list.component.css'],
  //providers:[HttpSupportService]
})
export class Step1ListComponent implements OnInit {

  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books : IBook[];
  // event 처리
  selection = new SelectionModel<IBook>(false, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpSupportService:HttpSupportService) {
    this.httpSupportService.updateBooks.subscribe((data) => {
    /*
      updateBooks를 구독하고 있다가 데이터가 변경되면 변경된 데이터를 자동으로 가져옴.
      아래 getData처럼 getBooks라는 메소드를 만들어서 사용하지 않아도됨
    */
      this.books = data;
      this.dataSource = new MatTableDataSource<IBook>(this.books);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit() {
  }

  rowSelect(row) {
    this.selection.select(row);
    this.httpSupportService.updateSelectedBook.next(this.selection.selected[0]);
  }

}