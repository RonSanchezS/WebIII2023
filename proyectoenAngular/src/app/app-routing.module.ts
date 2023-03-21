import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PostsComponent } from './pages/posts/posts.component';
import { FormPostComponent } from './pages/form-post/form-post.component';
import { SinglepostComponent } from './pages/singlepost/singlepost.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'formpost', component : FormPostComponent},
  {path : 'posts/:id', component: SinglepostComponent},
  {path : 'posts', component : PostsComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
