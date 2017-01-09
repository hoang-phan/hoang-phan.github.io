import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {'(window:scroll)': 'onScroll($event)'}
})
export class HomeComponent {

  draftComputer = 1000;
  fillComputer = 1500;
  showCode = 10000;
  showLoading = 11000;
  removeComputer = 12000;
  codeLength = 197;
  tickIndex = -1;
  scrollTop;
  scrollRatio;
  phase;

  constructor() {
    this.onScroll(null);
  }

  onScroll($event) {
    this.scrollTop = document.body.scrollTop + document.documentElement.scrollTop;

    if (this.scrollTop <= this.draftComputer) {
      this.phase = 'draft-computer';
      this.scrollRatio = 1 - this.scrollTop / this.draftComputer;
    } else if (this.scrollTop <= this.fillComputer) {
      this.phase = 'fill-computer';
    } else if (this.scrollTop <= this.showCode) {
      this.phase = 'show-code';
      this.tickIndex = Math.ceil((this.scrollTop - this.fillComputer) * this.codeLength / (this.showCode - this.fillComputer));
    } else if (this.scrollTop <= this.showLoading) {
      this.phase = 'show-loading';
    } else if (this.scrollTop <= this.removeComputer){
      this.phase = 'remove-computer';
    } else {
      this.phase = 'done';
    }
  }
}
