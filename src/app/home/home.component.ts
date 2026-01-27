import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { NgIf } from '@angular/common';

// import {VehiclesComponent} from 'vehicles.component.ts';

@Component({
  selector: 'app-home',
  standalone: true,   // important!
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private router: Router) {}

  goToVehicles() {
    this.router.navigate(['/vehicles']);
  }

  goToTeam(){
    this.router.navigate(['/team']);
  }




  // achievements logic

  activeNo: number | null = null;

  onEnter(no: number) {
    this.activeNo = no;
  }

  onLeave() {
    this.activeNo = null;
  }


}
