import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeS5Component } from './home-s5.component';

describe('HomeS5Component', () => {
  let component: HomeS5Component;
  let fixture: ComponentFixture<HomeS5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeS5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
