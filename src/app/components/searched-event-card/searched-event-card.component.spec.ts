import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedEventCardComponent } from './searched-event-card.component';

describe('SearchedEventCardComponent', () => {
  let component: SearchedEventCardComponent;
  let fixture: ComponentFixture<SearchedEventCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedEventCardComponent]
    });
    fixture = TestBed.createComponent(SearchedEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
