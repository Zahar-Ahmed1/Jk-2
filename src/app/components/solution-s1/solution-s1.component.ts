import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ScrollDownIndicatorComponent } from '../../shared/scroll-down-indicator.component';

@Component({
  selector: 'app-solution-s1',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ScrollDownIndicatorComponent],
  templateUrl: './solution-s1.component.html',
  styleUrls: ['./solution-s1.component.scss']
})
export class SolutionS1Component implements OnInit {
  cards: { icon: SafeHtml, title: string, text: string }[] = [];

  constructor(private sanitizer: DomSanitizer) {}

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
        text: 'Optimisez votre présence en ligne avec une gestion experte de vos réseaux sociaux. Nous développons des stratégies ciblées, créons du contenu engageant et analysons les performances pour accroître votre visibilité et renforcer l’interaction avec votre audience.'
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="28" height="28" rx="6" stroke="#0056b3" stroke-width="3"/>
          <path d="M16 32L32 16" stroke="#E91E63" stroke-width="3"/>
          <circle cx="24" cy="24" r="3" fill="#E91E63"/>
        </svg>`),
        title: 'Analyse et exploitation des données',
        text: 'Utilisez vos données comme un levier de croissance en les transformant en informations claires et exploitables. Grâce à des analyses précises, nous vous aidons à mieux comprendre votre marché, optimiser vos stratégies et prendre des décisions plus efficaces pour le développement de votre activité.'
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="24" height="24" rx="6" stroke="#0056b3" stroke-width="3"/>
          <path d="M24 16V32" stroke="#E91E63" stroke-width="3"/>
          <path d="M16 24H32" stroke="#E91E63" stroke-width="3"/>
        </svg>`),
        title: 'Adaptabilité et polyvalence',
        text: 'Garantissez une expérience utilisateur optimale avec un site web entièrement adaptable à tous les écrans. Que ce soit sur ordinateur, tablette ou smartphone, votre site s’ajuste automatiquement pour offrir une navigation fluide et intuitive. Cette flexibilité assure une meilleure accessibilité, renforce l’engagement de vos visiteurs et améliore votre visibilité en ligne.'
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" stroke="#0056b3" stroke-width="3"/>
          <path d="M16 32C16 28.6863 18.6863 26 22 26H26C29.3137 26 32 28.6863 32 32" stroke="#E91E63" stroke-width="3"/>
          <circle cx="24" cy="18" r="3" fill="#E91E63"/>
        </svg>`),
        title: 'Solutions sur mesure',
        text: 'Nous créons des sites web sur mesure, entièrement adaptés à vos besoins et à l’image de votre entreprise. Chaque site est conçu pour répondre à vos objectifs spécifiques, qu’il s’agisse d’améliorer votre visibilité, d’attirer de nouveaux clients ou de faciliter l’interaction avec vos utilisateurs. Nos solutions sont conçues pour évoluer avec votre entreprise et vous accompagner dans sa croissance à long terme.'
      }
    ];
  }

  scrollToSolutionS2() {
    setTimeout(() => {
      const el = document.getElementById('solution-s2-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
} 