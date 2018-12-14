import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1MainComponent } from './step1-main/step1-main.component';
import { Step1SearchComponent } from './step1-search/step1-search.component';
import { Step1DetailComponent } from './step1-detail/step1-detail.component';
import { Step1ListComponent } from './step1-list/step1-list.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
/* 
양방향 바인딩을 위한 formsModule import
[(ngModel)]과 같이 바인딩 대상 선언
*/
import {FormsModule} from '@angular/forms';

/* 
한글 양방향바인딩을 위한 
COMPOSITION_BUFFER_MODE import
*/
import {COMPOSITION_BUFFER_MODE} from '@angular/forms';

@NgModule({
  declarations: [Step1MainComponent, Step1SearchComponent, Step1DetailComponent, Step1ListComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    }
    // 하위 모듈은 모두 해당 의존 모듈을 사용할 수 있다. 만약 root module에 등록한다면 전역에서 사용가능한 의존 모듈을 설정하는 것을 의미한다. 
    // providers: [
    //   //angular framework에 어떤 클래스가 injection 됐는지 알려주는 역할 
    //   HttpSupportService
    // ]
  ]
})
export class Step1Module { }
