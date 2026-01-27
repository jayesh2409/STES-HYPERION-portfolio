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
    }, 100000);
  }

























  // To OVERLAY THE CLICKED IMAGE OR THE VIDEO.
  showPreview = false;
  currentSrc: string | null = null;
  isImage = true;
  timeoutRef: any;
  countdownRef: any;
  countdownValue: number = 7; // start from 7 seconds


  openPreview(event: any) {
    const element = event.target as HTMLImageElement | HTMLVideoElement;

    if (element.tagName.toLowerCase() === 'img') {
      this.currentSrc = element.src;
      this.isImage = true;
    } else if (element.tagName.toLowerCase() === 'video') {
      this.currentSrc = element.currentSrc || element.src;
      this.isImage = false;
    }

    this.showPreview = true;
    this.countdownValue = 7; // reset countdown

    // Clear previous timers
    if (this.timeoutRef) clearTimeout(this.timeoutRef);
    if (this.countdownRef) clearInterval(this.countdownRef);

    // Countdown interval
    this.countdownRef = setInterval(() => {
      this.countdownValue--;
      if (this.countdownValue <= 0) {
        clearInterval(this.countdownRef);
      }
    }, 1000);

    // Close after 7seconds
    this.timeoutRef = setTimeout(() => {
      this.closePreview();
    }, 7000);
  }

  closePreview() {
    this.showPreview = false;
    this.currentSrc = null;
    if (this.countdownRef) clearInterval(this.countdownRef);
  }

  

}
