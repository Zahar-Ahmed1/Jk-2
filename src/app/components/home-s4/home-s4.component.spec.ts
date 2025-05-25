import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeS4Component } from './home-s4.component';

describe('HomeS4Component', () => {
  let component: HomeS4Component;
  let fixture: ComponentFixture<HomeS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeS4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
