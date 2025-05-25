import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeS6Component } from './home-s6.component';

describe('HomeS6Component', () => {
  let component: HomeS6Component;
  let fixture: ComponentFixture<HomeS6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeS6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeS6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
