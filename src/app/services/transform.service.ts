import { Injectable } from '@angular/core';
import { Transform } from '../models/transform';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class TransformService {
  _builder: Transform;

  constructor(private _sanitizer: DomSanitizer) {}

  new() {
    this._builder = new Transform();
    return this;
  }

  translate(x, y) {
    this._builder.add(' translate(' + x + 'px, ' + y + 'px)')
    return this;
  }

  scale(sx, sy) {
    this._builder.add(' scale(' + sx + ', ' + sy + ')')
    return this;
  }

  rotate(r) {
    this._builder.add(' rotate(' + r + 'deg)')
    return this;
  }

  transform() {
    return this._sanitizer.bypassSecurityTrustStyle(this._builder.raw);
  }
}
