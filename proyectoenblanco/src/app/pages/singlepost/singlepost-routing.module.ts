import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglepostPage } from './singlepost.page';

const routes: Routes = [
  {
    path: '',
    component: SinglepostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglepostPageRoutingModule {}
