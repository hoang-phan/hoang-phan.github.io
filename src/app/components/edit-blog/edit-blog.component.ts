import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { Config } from '../../app.config';

@Component({
  selector: 'edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
  providers: [BlogService]
})

export class EditBlogComponent implements OnInit {
  blog: Blog = new Blog({});

  constructor(private _blogService: BlogService, private _router: Router, private _route: ActivatedRoute, private _config: Config) {
    if (!this._config.isWriter()) {
      this._router.navigate(['blogs']);
    }
  }

  ngOnInit() {
    this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._blogService.get(id)
              .subscribe(obj => this.blog = new Blog(obj))
        });
  }

  updateBlog() {
    this._blogService.update(this.blog.id, this.blog)
        .subscribe((data: Blog) => {
          this._router.navigate(['blogs']);
        });
  }

  onModelChange() {
    
  }
}
