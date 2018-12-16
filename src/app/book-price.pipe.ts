import { Pipe, PipeTransform } from '@angular/core';

// custom pipe 생성
@Pipe({
  name: 'bookPrice'
})
export class BookPricePipe implements PipeTransform {

  //transform 메소드가 호출되면서 변환 작업 시작, 입력받은 숫자를 3자리마다 , 를 찍고 마지막에 원을 찍어서 리턴
  transform(value: any, args?: any): any {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  }

}
