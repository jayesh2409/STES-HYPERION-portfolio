import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './content/posts/posts.component';
import { TeamComponent } from './content/team/team.component';
import { SponsorsComponent } from './content/sponsors/sponsors.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'posts', component: PostsComponent },
      { path: 'team', component: TeamComponent },
      { path: 'sponsors', component: SponsorsComponent },
      // The empty path redirects to the posts section by default
      { path: '', redirectTo: 'posts', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }