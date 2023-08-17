import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopUploadModalComponent } from './desktop-upload-modal.component';

describe('DesktopUploadModalComponent', () => {
  let component: DesktopUploadModalComponent;
  let fixture: ComponentFixture<DesktopUploadModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopUploadModalComponent]
    });
    fixture = TestBed.createComponent(DesktopUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
