import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'listsaposts',
    loadChildren: () => import('./pages/listsaposts/listsaposts.module').then( m => m.ListsapostsPageModule)
  },
  {
    path: 'singlepost/:id',
    loadChildren: () => import('./pages/singlepost/singlepost.module').then( m => m.SinglepostPageModule)
  },
  {
    path: 'formpage',
    loadChildren: () => import('./pages/formpage/formpage.module').then( m => m.FormpagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listapersonas',
    loadChildren: () => import('./pages/listapersonas/listapersonas.module').then( m => m.ListapersonasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
