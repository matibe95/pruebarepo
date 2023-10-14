import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedCommunityCardComponent } from './searched-community-card.component';

describe('SearchedCommunityCardComponent', () => {
  let component: SearchedCommunityCardComponent;
  let fixture: ComponentFixture<SearchedCommunityCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedCommunityCardComponent]
    });
    fixture = TestBed.createComponent(SearchedCommunityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
