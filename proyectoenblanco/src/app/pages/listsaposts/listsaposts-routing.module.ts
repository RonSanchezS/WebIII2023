import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsapostsPage } from './listsaposts.page';

const routes: Routes = [
  {
    path: '',
    component: ListsapostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsapostsPageRoutingModule {}
