import { HomeComponent } from './components/home/home.component';
import { ListBlogsComponent } from './components/list-blogs/list-blogs.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { AboutComponent } from './components/about/about.component';

export const AppRoutes = [
  {path: '', component: HomeComponent},
  {path: 'blog/new', component: NewBlogComponent},
  {path: 'blog/:id/edit', component: EditBlogComponent},
  {path: 'blogs', component: ListBlogsComponent},
  {path: 'about', component: AboutComponent}
]
