import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HomeS2Component } from '../home-s2/home-s2.component';
import { HomeS3Component } from '../home-s3/home-s3.component';
import { HomeS4Component } from '../home-s4/home-s4.component';
import { HomeS5Component } from '../home-s5/home-s5.component';
import { HomeS6Component } from '../home-s6/home-s6.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home-s1',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HomeS2Component, HomeS3Component, HomeS4Component, HomeS5Component, HomeS6Component],
  templateUrl: './home-s1.component.html',
  styleUrls: ['./home-s1.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      transition(':enter', [
        animate('0.6s ease-out')
      ])
    ]),
    trigger('slideInFromLeft', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(-100px)'
      })),
      transition(':enter', [
        animate('0.8s ease-out')
      ])
    ]),
    trigger('slideInFromRight', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(100px)'
      })),
      transition(':enter', [
        animate('0.8s ease-out')
      ])
    ]),
    trigger('fadeInUp', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition(':enter', [
        animate('0.6s ease-out')
      ])
    ]),
    trigger('backgroundAnimation', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1s ease-out')
      ])
    ])
  ]
})
export class HomeS1Component implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    // Animation GSAP pour les lignes de fond
    gsap.to('.background-lines', {
      backgroundPosition: '100% 100%',
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

    // Animation du titre avec effet de découpage
    const title = document.querySelector('.main-title');
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
          duration: 0.1,
          delay: i * 0.05
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

  scrollToSection() {
    const el = document.getElementById('home-s2-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const heroSection = this.el.nativeElement.querySelector('.hero-section');
    const overlay = this.el.nativeElement.querySelector('.hero-bg-overlay');
    if (!heroSection || !overlay) return;
    const rect = heroSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // Quand le bas du hero approche du haut du viewport, on diminue l'opacité
    let progress = 1 - Math.max(0, Math.min(1, (windowHeight - rect.bottom) / windowHeight));
    // progress = 0 (overlay opaque), progress = 1 (overlay transparent)
    const opacity = 1 - progress;
    this.renderer.setStyle(overlay, 'opacity', opacity.toString());
  }
}
