import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterwithViewChildComponent } from './masterwith-view-child.component';

describe('MasterwithViewChildComponent', () => {
  let component: MasterwithViewChildComponent;
  let fixture: ComponentFixture<MasterwithViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterwithViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterwithViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
