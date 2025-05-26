import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedCircleComponent } from './animated-circle.component';

describe('AnimatedCircleComponent', () => {
  let component: AnimatedCircleComponent;
  let fixture: ComponentFixture<AnimatedCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
