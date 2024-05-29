import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadHandlerComponent } from './upload-handler.component';

describe('UploadHandlerComponent', () => {
  let component: UploadHandlerComponent;
  let fixture: ComponentFixture<UploadHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadHandlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
