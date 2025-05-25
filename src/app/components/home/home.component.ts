import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeS1Component } from '../home-s1/home-s1.component';
import { HomeS2Component } from '../home-s2/home-s2.component';
import { HomeS3Component } from '../home-s3/home-s3.component';
import { HomeS4Component } from '../home-s4/home-s4.component';
import { HomeS5Component } from '../home-s5/home-s5.component';
import { HomeS6Component } from '../home-s6/home-s6.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HomeS1Component, HomeS2Component, HomeS3Component, HomeS4Component, HomeS5Component, HomeS6Component],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {} 