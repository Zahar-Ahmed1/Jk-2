import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgStyle,NavbarComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  private scrollPositions: { [url: string]: number } = {};
  private currentUrl: string = '';
  email: string = 'achrafnajouwork@gmail.com';

  img: any;
   constructor(private router: Router) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          // Sauvegarde la position de scroll actuelle avant de quitter la page
          this.scrollPositions[this.currentUrl] = window.scrollY;
        } else if (event instanceof NavigationEnd) {
          this.currentUrl = event.urlAfterRedirects;
  
          // Restaure la position de scroll de la page
          setTimeout(() => {
            window.scrollTo(0, this.scrollPositions[this.currentUrl] || 0);
          }, 100);
        }
      });
    }
  ngOnInit() {


  }

}
