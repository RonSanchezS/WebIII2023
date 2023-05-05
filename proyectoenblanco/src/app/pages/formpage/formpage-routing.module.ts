import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormpagePage } from './formpage.page';

const routes: Routes = [
  {
    path: '',
    component: FormpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormpagePageRoutingModule {}
