import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recruitment',
  imports: [CommonModule],
  standalone: true,   // important!
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent {
  

  overlayIsActive : number | null = null;

  displayOverlay(l: number | null){
    this.overlayIsActive = l;
  }






  // begins for subsystems
  activeOverlay : number | null = null;

  showOverlay(n: number | null){
    this.activeOverlay = n;
  }

}
