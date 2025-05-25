import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDownIndicatorComponent } from '../../shared/scroll-down-indicator.component';

@Component({
  selector: 'app-vision-s1',
  standalone: true,
  imports: [CommonModule, ScrollDownIndicatorComponent],
  templateUrl: './vision-s1.component.html',
  styleUrls: ['./vision-s1.component.scss']
})
export class VisionS1Component {
  scrollToVisionS2() {
    const el = document.getElementById('vision-s2-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 