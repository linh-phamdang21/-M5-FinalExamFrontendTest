import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, Router, RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogCreateComponent} from './blog-create/blog-create.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full'},
  { path: 'blogs', component: BlogComponent},
  { path: 'blogs/create', component: BlogCreateComponent},
  { path: 'blogs/detail/:id', component: BlogDetailComponent},
  { path: 'blogs/edit/:id', component: BlogEditComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, useHash: false
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
