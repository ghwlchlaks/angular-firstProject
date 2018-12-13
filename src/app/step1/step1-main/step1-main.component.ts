import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1-main',
  templateUrl: './step1-main.component.html',
  styleUrls: ['./step1-main.component.css']
})
export class Step1MainComponent implements OnInit {

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
}
