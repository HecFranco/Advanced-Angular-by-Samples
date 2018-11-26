import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterwithoutputandeventemiterComponent } from '../components/masterwithoutputandeventemiter.component';

describe('MasterwithoutputandeventemiterComponent', () => {
  let component: MasterwithoutputandeventemiterComponent;
  let fixture: ComponentFixture<MasterwithoutputandeventemiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterwithoutputandeventemiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterwithoutputandeventemiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
