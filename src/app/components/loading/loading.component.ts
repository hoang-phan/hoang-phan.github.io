import { Component, ChangeDetectorRef, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnChanges {
  @Input() phase;

  constructor(private _changeRef: ChangeDetectorRef) { }

  ngOnChanges(changes) {
    this._changeRef.detectChanges();
  }

  loadingClass() {
    return this.phase == 'show-loading' || this.phase == 'remove-computer' ? 'showing' : '';
  }
}
