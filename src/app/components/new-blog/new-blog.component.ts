import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { Config } from '../../app.config';

@Component({
  selector: 'new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
  providers: [BlogService]
})

export class NewBlogComponent {
  blog: Object = {};

  constructor(private _blogService: BlogService, private _router: Router, private _config: Config) {
    if (!this._config.isWriter()) {
      this._router.navigate(['blogs']);
    }
  }

  createBlog() {
    this._blogService.create(this.blog)
        .subscribe((data: Blog) => {
          this._router.navigate(['blogs']);
        });
  }

  onModelChange() {
    
  }
}
