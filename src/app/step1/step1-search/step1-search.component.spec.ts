import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1SearchComponent } from './step1-search.component';

describe('Step1SearchComponent', () => {
  let component: Step1SearchComponent;
  let fixture: ComponentFixture<Step1SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
