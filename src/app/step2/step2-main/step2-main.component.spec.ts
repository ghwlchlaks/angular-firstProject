import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2MainComponent } from './step2-main.component';

describe('Step2MainComponent', () => {
  let component: Step2MainComponent;
  let fixture: ComponentFixture<Step2MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
