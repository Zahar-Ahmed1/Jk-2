import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-down-indicator',
  standalone: true,
  imports: [],
  templateUrl: './scroll-down-indicator.component.html',
  styleUrl: './scroll-down-indicator.component.scss'
})
export class ScrollDownIndicatorComponent {
  @Input() nextSectionId: string = '';

  scrollToNextSection() {
    if (this.nextSectionId) {
      const el = document.getElementById(this.nextSectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
