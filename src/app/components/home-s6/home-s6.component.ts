import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDownIndicatorComponent } from '../../shared/scroll-down-indicator.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home-s6',
  standalone: true,
  imports: [CommonModule, ScrollDownIndicatorComponent],
  templateUrl: './home-s6.component.html',
  styleUrls: ['./home-s6.component.scss']
})
export class HomeS6Component implements OnInit {
  cards: { icon: SafeHtml, title: string, text: string }[] = [];

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.cards = [
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="#0056b3" stroke-width="3"/>
          <path d="M16 28C16 24.6863 18.6863 22 22 22H26C29.3137 22 32 24.6863 32 28" stroke="#E91E63" stroke-width="3"/>
          <circle cx="19" cy="32" r="2" fill="#E91E63"/>
          <circle cx="24" cy="32" r="2" fill="#0056b3"/>
          <circle cx="29" cy="32" r="2" fill="#E91E63"/>
        </svg>`),
        title: 'Stratégie de réseaux sociaux',
        text: 'Boostez votre présence en ligne avec une gestion optimisée de vos réseaux sociaux.'
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="28" height="28" rx="6" stroke="#0056b3" stroke-width="3"/>
          <path d="M16 32L32 16" stroke="#E91E63" stroke-width="3"/>
          <circle cx="24" cy="24" r="3" fill="#E91E63"/>
        </svg>`),
        title: 'Adaptabilité et polyvalence',
        text: "Votre site s'adapte à tous les écrans pour une visibilité optimale."
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="24" height="24" rx="6" stroke="#0056b3" stroke-width="3"/>
          <path d="M24 16V32" stroke="#E91E63" stroke-width="3"/>
          <path d="M16 24H32" stroke="#E91E63" stroke-width="3"/>
        </svg>`),
        title: 'Analyse et exploitation des données',
        text: 'Transformez vos données en informations stratégiques pour améliorer votre prise de décision.'
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="#0056b3" stroke-width="3"/>
          <path d="M16 32C16 28.6863 18.6863 26 22 26H26C29.3137 26 32 28.6863 32 32" stroke="#E91E63" stroke-width="3"/>
          <circle cx="24" cy="18" r="3" fill="#E91E63"/>
        </svg>`),
        title: 'Solutions sur mesure',
        text: 'Nous créons un site à votre image, conçu pour atteindre vos objectifs.'
      }
    ];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = this.el.nativeElement.querySelector('.home-s6-section');
    const overlay = this.el.nativeElement.querySelector('.section-bg-overlay');
    if (!section || !overlay) return;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let progress = 1 - Math.max(0, Math.min(1, (windowHeight - rect.bottom) / windowHeight));
    const opacity = 0.18 - progress * 0.18;
    this.renderer.setStyle(overlay, 'opacity', opacity.toString());
  }

  scrollToSection() {
    const el = document.getElementById('home-s1-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
