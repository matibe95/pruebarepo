import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePostComponent } from './explore-post.component';

describe('ExplorePostComponent', () => {
  let component: ExplorePostComponent;
  let fixture: ComponentFixture<ExplorePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplorePostComponent]
    });
    fixture = TestBed.createComponent(ExplorePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
