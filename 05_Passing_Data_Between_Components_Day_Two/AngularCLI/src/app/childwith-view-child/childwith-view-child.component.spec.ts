import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildwithViewChildComponent } from './childwith-view-child.component';

describe('ChildwithViewChildComponent', () => {
  let component: ChildwithViewChildComponent;
  let fixture: ComponentFixture<ChildwithViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildwithViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildwithViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
