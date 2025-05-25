import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollDownIndicatorComponent } from '../../shared/scroll-down-indicator.component';

@Component({
  selector: 'app-home-s2',
  standalone: true,
  imports: [CommonModule, ScrollDownIndicatorComponent],
  templateUrl: './home-s2.component.html',
  styleUrl: './home-s2.component.scss',
  animations: [
    trigger('fadeInUp', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition(':enter', [
        animate('0.7s 0.2s cubic-bezier(.4,2,.3,1)')
      ])
    ]),
    trigger('slideInFromTop', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-60px)'
      })),
      transition(':enter', [
        animate('0.8s cubic-bezier(.4,2,.3,1)')
      ])
    ]),
    trigger('backgroundAnimation', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1.2s ease-out')
      ])
    ])
  ]
})
export class HomeS2Component implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    // Animation GSAP pour les lignes de fond
    gsap.to('.home-s2-background-lines', {
      backgroundPosition: '200px 100px',
      duration: 18,
      repeat: -1,
      ease: 'none'
    });
    // Animation du titre lettre par lettre
    const title = document.querySelector('.home-s2-title');
    if (title) {
      const text = title.textContent || '';
      title.textContent = '';
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        title.appendChild(span);
        gsap.to(span, {
          opacity: 1,
          duration: 0.08,
          delay: i * 0.04
        });
      });
    }
  }

  ngAfterViewInit(): void {
    this.animate();
  }

  private animate(): void {
    if (typeof document !== 'undefined') {
      const elements = document.querySelectorAll('.animate-element');
      if (elements.length > 0) {
        gsap.from(elements, {
          duration: 1,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = this.el.nativeElement.querySelector('.home-s2-section');
    const overlay = this.el.nativeElement.querySelector('.section-bg-overlay');
    if (!section || !overlay) return;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let progress = 1 - Math.max(0, Math.min(1, (windowHeight - rect.bottom) / windowHeight));
    const opacity = 0.18 - progress * 0.18;
    this.renderer.setStyle(overlay, 'opacity', opacity.toString());
  }

  scrollToSection() {
    const el = document.getElementById('home-s3-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
