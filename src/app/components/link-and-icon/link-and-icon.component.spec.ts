import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkAndIconComponent } from './link-and-icon.component';

describe('LinkAndIconComponent', () => {
  let component: LinkAndIconComponent;
  let fixture: ComponentFixture<LinkAndIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkAndIconComponent]
    });
    fixture = TestBed.createComponent(LinkAndIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
