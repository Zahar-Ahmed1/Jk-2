import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDownIndicatorComponent } from '../../shared/scroll-down-indicator.component';

@Component({
  selector: 'app-vision-s2',
  standalone: true,
  imports: [CommonModule, ScrollDownIndicatorComponent],
  templateUrl: './vision-s2.component.html',
  styleUrls: ['./vision-s2.component.scss']
})
export class VisionS2Component {
  scrollToVisionS1() {
    const el = document.getElementById('vision-s1-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 