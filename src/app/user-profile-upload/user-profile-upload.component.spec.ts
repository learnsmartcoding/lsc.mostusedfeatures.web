import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileUploadComponent } from './user-profile-upload.component';

describe('UserProfileUploadComponent', () => {
  let component: UserProfileUploadComponent;
  let fixture: ComponentFixture<UserProfileUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileUploadComponent]
    });
    fixture = TestBed.createComponent(UserProfileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
