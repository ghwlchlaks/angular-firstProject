import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1ListComponent } from './step1-list.component';

describe('Step1ListComponent', () => {
  let component: Step1ListComponent;
  let fixture: ComponentFixture<Step1ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
