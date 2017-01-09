import { Component, OnInit, ChangeDetectorRef, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {

  @Input() showing;

  constructor(private _router: Router, private _changeRef: ChangeDetectorRef) { }

  ngOnChanges(changes) {
    this._changeRef.detectChanges();
  }

  navClass() {
    return this.showing ? 'showing' : ''
  }
}
