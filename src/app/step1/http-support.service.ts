import { Injectable } from '@angular/core';
/*
해당 http서비스를 전체로 이용하는 경우, 한개의 module에서만 이용하는 경우가 있지만
여기서는 search에서만 이용하므로 이 위치에 해당 서비스 모듈 파일을 위치시킨다.
*/
import {HttpClient} from '@angular/common/http';

//원래는 interface로 따로 관리해야하지만 여기서는 중복된 코드로 사용
interface IBook {
  bauthor : string;
  bdate : string;
  btranslator : string;
  bpublisher : string;
  bprice : string;
  bisbn : string;
  bimgurl : string;
}

/*
@Injectable decorator : 해당 클래스가 다른 클래스에 주입(Injection)이 될 수 있다는 것을 의미
Injection은 생성자를 이용하게되고 Injection 과정은 Angular Framework가 담당
*/
@Injectable({
  providedIn: 'root'
})
export class HttpSupportService {

  books : IBook[];
  // private로 Injection된 HttpClient객체를 받는다.
  constructor(private http: HttpClient) { }

  //Injection받은 HttpClient 객체를 이용해서 파일로부터 Json데이터를 읽는다.
  getJsonData() {
    this.http.get<IBook[]>('assets/data/book.json').subscribe(
      res => {
        this.books =res;
        console.log(this.books);
      });
  }
  getJsonConfig(url: string, name: string) {
    this.http.get<IBook[]>(`${url}${name}`).subscribe(
      res => {
        this.books = res;
        console.log(this.books);
      }
    )
  }
}
