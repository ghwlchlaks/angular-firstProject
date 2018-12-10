import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular router module import
import { Routes, RouterModule } from '@angular/router';

//routing 처리를 할 각각의 component import
import {HomeComponent} from '../pages/home/home.component';
import {Step1MainComponent} from '../step1/step1-main/step1-main.component';
import {Step2MainComponent} from '../step2/step2-main/step2-main.component';

// router 생성 
const routers: Routes = [
  {path: '', component: HomeComponent},
  {path: 'step1', component: Step1MainComponent},
  {path: 'step2', component: Step2MainComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
