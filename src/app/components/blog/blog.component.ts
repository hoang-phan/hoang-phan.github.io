import { Component, Input, Output, AfterViewChecked, EventEmitter } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements AfterViewChecked {
  @Input() blog;
  @Input() isWriter;
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngAfterViewChecked() {
    Prism.highlightAll();
  }

  delete() {
    this.onDelete.emit(this.blog.id);
  }
}
