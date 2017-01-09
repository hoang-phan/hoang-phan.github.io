import {
  async, inject
} from '@angular/core/testing';
import {Blog} from './blog';

describe('Blog', () => {
  it('accepts title and body in constructor', () => {
    let title = 'Test title';
    let body = 'Test body';
    let blog = new Blog({title: title, body: body});
    expect(blog.title).toEqual(title);
    expect(blog.body).toEqual(body);
  });
});
