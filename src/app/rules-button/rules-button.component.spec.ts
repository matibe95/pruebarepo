import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesButtonComponent } from './rules-button.component';

describe('RulesButtonComponent', () => {
  let component: RulesButtonComponent;
  let fixture: ComponentFixture<RulesButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesButtonComponent]
    });
    fixture = TestBed.createComponent(RulesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
