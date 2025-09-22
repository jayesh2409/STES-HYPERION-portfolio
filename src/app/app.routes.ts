import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
