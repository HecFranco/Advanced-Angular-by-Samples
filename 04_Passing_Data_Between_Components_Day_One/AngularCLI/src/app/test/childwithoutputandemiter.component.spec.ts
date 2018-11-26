import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildwithoutputandemiterComponent } from '../components/childwithoutputandemiter.component';

describe('ChildwithoutputandemiterComponent', () => {
  let component: ChildwithoutputandemiterComponent;
  let fixture: ComponentFixture<ChildwithoutputandemiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildwithoutputandemiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildwithoutputandemiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
