import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComunityComponent } from './feed-comunity.component';

describe('FeedComunityComponent', () => {
  let component: FeedComunityComponent;
  let fixture: ComponentFixture<FeedComunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedComunityComponent]
    });
    fixture = TestBed.createComponent(FeedComunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
