import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PostsComponent } from '../content/posts/posts.component';
import { TeamComponent } from '../content/team/team.component';
import { SponsorsComponent } from '../content/sponsors/sponsors.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, PostsComponent, TeamComponent, SponsorsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private router = inject(Router);
  public currentPage = signal<string>('posts');

  public logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }

  public navigateTo(page: string) {
    this.currentPage.set(page);
  }
}