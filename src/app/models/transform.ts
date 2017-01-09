export class Transform {
  raw: string;

  constructor() {
    this.raw = '';
  }

  add(style) {
    this.raw += style;
  }
}
