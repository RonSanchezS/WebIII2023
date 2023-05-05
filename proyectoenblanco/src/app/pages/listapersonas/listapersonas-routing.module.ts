import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListapersonasPage } from './listapersonas.page';

const routes: Routes = [
  {
    path: '',
    component: ListapersonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListapersonasPageRoutingModule {}
