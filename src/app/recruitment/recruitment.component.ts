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

  hideTimeout: any;

  showOverlay(n: number | null){
    clearTimeout(this.hideTimeout);
    this.activeOverlay = n;
  }


  hideOverlayWithDelay() {
    this.hideTimeout = setTimeout(() => {
      this.activeOverlay = null;
    }, 400000); // 30000ms = 2 seconds delay
  }
























  // .
  showPreview = false;
  currentSrc: string | null = null;
  isImage = true;
  timeoutRef: any;

  openPreview(event: any) {
    const element = event.target;
    this.currentSrc = element.src;
    this.isImage = element.tagName.toLowerCase() === 'img';

    this.showPreview = true;

    if (this.timeoutRef) clearTimeout(this.timeoutRef);

    this.timeoutRef = setTimeout(() => {
      this.closePreview();
    }, 70000);
  }

  closePreview() {
    this.showPreview = false;
    this.currentSrc = null;
  }
}
