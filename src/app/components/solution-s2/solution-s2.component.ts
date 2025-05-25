import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDownIndicatorComponent } from '../../shared/scroll-down-indicator.component';

@Component({
  selector: 'app-solution-s2',
  standalone: true,
  imports: [CommonModule, ScrollDownIndicatorComponent],
  templateUrl: './solution-s2.component.html',
  styleUrls: ['./solution-s2.component.scss']
})
export class SolutionS2Component {
  scrollToNext() {
    const el = document.getElementById('solution-s3-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSolutionS1() {
    setTimeout(() => {
      const el = document.getElementById('solution-s1-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
} 