import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1MainComponent } from './step1-main.component';

describe('Step1MainComponent', () => {
  let component: Step1MainComponent;
  let fixture: ComponentFixture<Step1MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
