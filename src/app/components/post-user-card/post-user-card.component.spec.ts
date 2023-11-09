import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserCardComponent } from './post-user-card.component';

describe('PostUserCardComponent', () => {
  let component: PostUserCardComponent;
  let fixture: ComponentFixture<PostUserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostUserCardComponent]
    });
    fixture = TestBed.createComponent(PostUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
