import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SolutionS1Component } from '../solution-s1/solution-s1.component';
import { SolutionS2Component } from '../solution-s2/solution-s2.component';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SolutionS1Component, SolutionS2Component],
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent {} 