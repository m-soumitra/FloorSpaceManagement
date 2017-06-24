import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationSystemComponent } from './allocation-system.component';

describe('AllocationSystemComponent', () => {
  let component: AllocationSystemComponent;
  let fixture: ComponentFixture<AllocationSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
