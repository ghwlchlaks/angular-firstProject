import { Component, OnInit } from '@angular/core';
import {HttpSupportService} from "../http-support.service";

interface IBook {
  bauthor: string;
  bdate: string;
  btranslator: string;
  bpublisher: string;
  btitle: string;
  bprice: number;
  bisbn: string;
  bimgurl: string;
}

@Component({
  selector: 'app-step1-detail',
  templateUrl: './step1-detail.component.html',
  styleUrls: ['./step1-detail.component.css']
})
export class Step1DetailComponent implements OnInit {

  book : IBook;

  constructor(private httpSupportService : HttpSupportService) {
    this.httpSupportService.updateSelectedBook.subscribe(selectedBook => {
      this.book = selectedBook;
    })
   }

  ngOnInit() {
  }

}
