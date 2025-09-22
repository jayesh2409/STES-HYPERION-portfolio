import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ContactComponent } from './contact/contact.component';

import { Infiniti1oComponent } from './vehicles/infiniti1o/infiniti1o.component';
import { Infiniti2oComponent } from './vehicles/infiniti2o/infiniti2o.component';
import { Infiniti3oComponent } from './vehicles/infiniti3o/infiniti3o.component';
import { Infiniti5oComponent } from './vehicles/infiniti5o/infiniti5o.component';
import { Infiniti6oComponent } from './vehicles/infiniti6o/infiniti6o.component';
import { Infiniti7oComponent } from './vehicles/infiniti7o/infiniti7o.component';
import { Infiniti8oComponent } from './vehicles/infiniti8o/infiniti8o.component';
import { AnantamComponent } from './vehicles/anantam/anantam.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'sponsors', component: SponsorsComponent },
  {
    path: 'vehicles',
    component: VehiclesComponent,
    children: [
      { path: '', redirectTo: 'infiniti1o', pathMatch: 'full' }, // default child
      { path: 'infiniti1o', component: Infiniti1oComponent },
      { path: 'infiniti2o', component: Infiniti2oComponent },
      { path: 'infiniti3o', component: Infiniti3oComponent },
      { path: 'infiniti5o', component: Infiniti5oComponent },
      { path: 'infiniti6o', component: Infiniti6oComponent },
      { path: 'infiniti7o', component: Infiniti7oComponent },
      { path: 'infiniti8o', component: Infiniti8oComponent },
      { path: 'anantam', component: AnantamComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
