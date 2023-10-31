import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostMenuComponent } from './create-post-menu.component';

describe('CreatePostMenuComponent', () => {
  let component: CreatePostMenuComponent;
  let fixture: ComponentFixture<CreatePostMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostMenuComponent]
    });
    fixture = TestBed.createComponent(CreatePostMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
