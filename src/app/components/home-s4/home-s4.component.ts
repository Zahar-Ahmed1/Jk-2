import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDownIndicatorComponent } from '../../shared/scroll-down-indicator.component';

@Component({
  selector: 'app-home-s4',
  standalone: true,
  imports: [CommonModule, ScrollDownIndicatorComponent],
  templateUrl: './home-s4.component.html',
  styleUrl: './home-s4.component.scss'
})
export class HomeS4Component implements OnInit {
  sites = [
    {
      title: 'E-commerce Platform',
      description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des stocks',
      technologies: ['Angular', 'Spring boot', 'MySQl'],
      img: 'https://res.cloudinary.com/dxtlsrtoq/image/upload/v12345678/byd3kejrde5pkv1axbfn.png',
      link: 'https://votre-site.com',
      features: ['Interface responsive', 'Système de paiement sécurisé', 'Gestion des stocks en temps réel']
    },
    {
      title: 'Application de Gestion',
      description: 'Système de gestion des tâches et des projets pour entreprises',
      technologies: ['Angular', 'Spring', 'PostgreSQL'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      link: 'https://votre-site.com',
      features: ['Tableau de bord interactif', 'Gestion des équipes', 'Rapports automatisés']
    },
    {
      title: 'Site Vitrine',
      description: 'Site vitrine moderne pour une entreprise des produits médicaux',
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      img: 'https://res.cloudinary.com/dxtlsrtoq/image/upload/v12345678/ouetvpdezehbugsaz7ng.png',
      link: 'https://votre-site.com',
      features: ['Design moderne', 'Animations fluides', 'SEO optimisé']
    }
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = this.el.nativeElement.querySelector('.home-s4-section');
    const overlay = this.el.nativeElement.querySelector('.section-bg-overlay');
    if (!section || !overlay) return;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let progress = 1 - Math.max(0, Math.min(1, (windowHeight - rect.bottom) / windowHeight));
    const opacity = 0.18 - progress * 0.18;
    this.renderer.setStyle(overlay, 'opacity', opacity.toString());
  }

  scrollToSection() {
    const el = document.getElementById('home-s5-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
