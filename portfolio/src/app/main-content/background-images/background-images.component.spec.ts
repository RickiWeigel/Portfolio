import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImagesComponent } from './background-images.component';

describe('BackgroundImagesComponent', () => {
  let component: BackgroundImagesComponent;
  let fixture: ComponentFixture<BackgroundImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
