import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProfileComponent } from './modify-profile.component';

describe('ModifyProfileComponent', () => {
  let component: ModifyProfileComponent;
  let fixture: ComponentFixture<ModifyProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyProfileComponent]
    });
    fixture = TestBed.createComponent(ModifyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
