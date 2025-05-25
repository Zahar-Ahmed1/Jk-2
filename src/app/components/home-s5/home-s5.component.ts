import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDownIndicatorComponent } from '../../shared/scroll-down-indicator.component';

@Component({
  selector: 'app-home-s5',
  standalone: true,
  imports: [CommonModule, ScrollDownIndicatorComponent],
  templateUrl: './home-s5.component.html',
  styleUrl: './home-s5.component.scss'
})
export class HomeS5Component {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = this.el.nativeElement.querySelector('.home-s5-section');
    const overlay = this.el.nativeElement.querySelector('.section-bg-overlay');
    if (!section || !overlay) return;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let progress = 1 - Math.max(0, Math.min(1, (windowHeight - rect.bottom) / windowHeight));
    const opacity = 0.18 - progress * 0.18;
    this.renderer.setStyle(overlay, 'opacity', opacity.toString());
  }

  scrollToSection() {
    const el = document.getElementById('home-s6-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
