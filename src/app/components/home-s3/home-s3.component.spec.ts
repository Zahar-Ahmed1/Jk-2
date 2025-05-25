import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeS3Component } from './home-s3.component';

describe('HomeS3Component', () => {
  let component: HomeS3Component;
  let fixture: ComponentFixture<HomeS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeS3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
