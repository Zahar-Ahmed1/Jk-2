import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollDownIndicatorComponent } from '../../shared/scroll-down-indicator.component';

@Component({
  selector: 'app-home-s3',
  standalone: true,
  imports: [CommonModule, ScrollDownIndicatorComponent],
  templateUrl: './home-s3.component.html',
  styleUrls: ['./home-s3.component.scss']
})
export class HomeS3Component implements OnInit, AfterViewInit {
  private counterAnimated = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    // Initialization logic
  }

  ngAfterViewInit(): void {
    this.onWindowScroll(); // check on load
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = this.el.nativeElement.querySelector('.home-s3-section');
    const overlay = this.el.nativeElement.querySelector('.section-bg-overlay');
    if (!section || !overlay) return;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let progress = 1 - Math.max(0, Math.min(1, (windowHeight - rect.bottom) / windowHeight));
    const opacity = 0.18 - progress * 0.18;
    this.renderer.setStyle(overlay, 'opacity', opacity.toString());

    // Animation compteur quand la section est visible
    if (!this.counterAnimated && rect.top < windowHeight && rect.bottom > 0) {
      this.animateCounter();
      this.counterAnimated = true;
    }
  }

  private animateCounter(): void {
    if (typeof document !== 'undefined') {
      const counters = document.querySelectorAll('.counter');
      if (counters.length > 0) {
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target') || '0');
          const duration = 2;
          const step = target / (duration * 60);
          let current = 0;

          const updateCounter = () => {
            current += step;
            if (current < target) {
              counter.textContent = Math.ceil(current).toString();
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toString();
            }
          };

          updateCounter();
        });
      }
    }
  }

  scrollToSection() {
    const el = document.getElementById('home-s4-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
