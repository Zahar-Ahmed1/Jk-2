import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeS2Component } from './home-s2.component';

describe('HomeS2Component', () => {
  let component: HomeS2Component;
  let fixture: ComponentFixture<HomeS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeS2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
