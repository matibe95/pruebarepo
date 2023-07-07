import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModalComponent } from './demo-modal.component';

describe('DemoModalComponent', () => {
  let component: DemoModalComponent;
  let fixture: ComponentFixture<DemoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoModalComponent]
    });
    fixture = TestBed.createComponent(DemoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
