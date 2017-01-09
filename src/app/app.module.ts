import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Config } from './app.config';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { ListBlogsComponent } from './components/list-blogs/list-blogs.component';
import { AboutComponent } from './components/about/about.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { FacebookAuthComponent } from './components/facebook-auth/facebook-auth.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { TinymceDirective } from './directives/tinymce.directive';
import { ComputerDrawingComponent } from './components/computer-drawing/computer-drawing.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CodeComponent } from './components/code/code.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SceneAComponent } from './components/scene-a/scene-a.component';
import { SceneBComponent } from './components/scene-b/scene-b.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBlogComponent,
    ListBlogsComponent,
    AboutComponent,
    EditBlogComponent,
    FacebookAuthComponent,
    TinymceDirective,
    BlogComponent,
    HomeComponent,
    ComputerDrawingComponent,
    LoadingComponent,
    CodeComponent,
    NavbarComponent,
    SceneAComponent,
    SceneBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
