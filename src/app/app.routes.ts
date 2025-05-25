import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SolutionComponent } from './components/solution/solution.component';
import { VisionComponent } from './components/vision/vision.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
