import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // IMPORTANT for routerLink to work

@Component({
  selector: 'app-root',
  standalone: true,               // MUST be true
  imports: [RouterModule],        // This enables <router-outlet> and routerLink
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
