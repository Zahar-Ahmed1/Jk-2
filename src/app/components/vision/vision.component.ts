import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { VisionS1Component } from '../vision-s1/vision-s1.component';
import { VisionS2Component } from '../vision-s2/vision-s2.component';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    VisionS1Component,
    VisionS2Component
  ],
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent {} 