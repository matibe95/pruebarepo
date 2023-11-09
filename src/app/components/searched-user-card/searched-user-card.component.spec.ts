import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedUserCardComponent } from './searched-user-card.component';

describe('SearchedUserCardComponent', () => {
  let component: SearchedUserCardComponent;
  let fixture: ComponentFixture<SearchedUserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedUserCardComponent]
    });
    fixture = TestBed.createComponent(SearchedUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
