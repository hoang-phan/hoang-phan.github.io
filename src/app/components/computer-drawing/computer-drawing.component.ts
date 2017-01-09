import { Component, Input, OnChanges, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'computer-drawing',
  templateUrl: './computer-drawing.component.html',
  styleUrls: ['./computer-drawing.component.css']
})
export class ComputerDrawingComponent implements OnChanges, AfterViewInit {
  @Input() phase;
  @Input() scrollRatio;

  Parts = [
    {fill: "url(#outer)", d: "M10 30 Q10 10 30 10 L570 10 Q590 10 590 30 L590 350 L10 350 Z"},
    {fill: "white", d: "M30 40 L570 40 L570 325 L30 325 Z"},
    {fill: "url(#screenBottom)", d: "M10 350 L10 390 Q10 410 30 410 L570 410 Q590 410 590 390 L590 350"},
    {fill: "black", d: "M300 372 Q293 368 290 375 L290 380 C290 385 293 393 300 388 Q307 393 310 383 Q305 378 310 373 Q306 368 300 373"},
    {fill: "black", d: "M300 369 Q307 369 307 363 Q300 363 300 369"},
    {fill: "url(#base)", d: "M240 410 C235 450 235 470 200 480 L400 480 C365 470 365 450 360 410"},
    {fill: "url(#foot)", d: "M200 480 L200 485 L400 485 L400 480"}
  ];

  els;
  lengths = {};

  constructor(private _changeRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.els = document.getElementsByClassName('computer-part');
    for (var i = 0; i < this.els.length; i++) {
      let length = this.els[i].getTotalLength();
      this.lengths[this.els[i].getAttribute('d')] = length;
      this.els[i].style.strokeDasharray = length; 
      this.els[i].style.strokeDashoffset = length; 
    }
  }

  ngOnChanges(changes) {
    this._changeRef.detectChanges();
  }

  computerClass() {
    return this.phase == 'remove-computer' || this.phase == 'done' ? '' : 'showing';
  }

  partClass() {
    return this.phase == 'draft-computer' ? '' : 'filled';
  }

  offset(d) {
    return this.lengths[d] * this.scrollRatio;
  }
}
