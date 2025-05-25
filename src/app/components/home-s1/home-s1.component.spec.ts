import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeS1Component } from './home-s1.component';

describe('HomeS1Component', () => {
  let component: HomeS1Component;
  let fixture: ComponentFixture<HomeS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeS1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
