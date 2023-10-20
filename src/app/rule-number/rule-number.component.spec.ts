import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleNumberComponent } from './rule-number.component';

describe('RuleNumberComponent', () => {
  let component: RuleNumberComponent;
  let fixture: ComponentFixture<RuleNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuleNumberComponent]
    });
    fixture = TestBed.createComponent(RuleNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
