import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { Config } from '../../app.config';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css'],
  providers: [BlogService]
})

export class ListBlogsComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private _blogService: BlogService, private _config: Config) { }

  ngOnInit() {
    this.refreshBlogs();
  }

  isWriter() {
    return this._config.isWriter();
  }

  deleteBlog(id) {
    this._blogService.delete(id).subscribe(
      (response) => this.refreshBlogs()
    );
  }

  refreshBlogs() {
    this._blogService.getAll().subscribe(
      (data: Blog[]) => this.blogs = data
    );
  }
}
