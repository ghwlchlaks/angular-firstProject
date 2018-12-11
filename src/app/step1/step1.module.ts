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

@NgModule({
  declarations: [Step1MainComponent, Step1SearchComponent, Step1DetailComponent, Step1ListComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class Step1Module { }
