import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAreaComponent } from './video-area.component';

describe('VideoAreaComponent', () => {
  let component: VideoAreaComponent;
  let fixture: ComponentFixture<VideoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
