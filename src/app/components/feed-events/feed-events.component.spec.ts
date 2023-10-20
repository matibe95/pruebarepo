import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedEventsComponent } from './feed-events.component';

describe('FeedEventsComponent', () => {
  let component: FeedEventsComponent;
  let fixture: ComponentFixture<FeedEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedEventsComponent]
    });
    fixture = TestBed.createComponent(FeedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
