import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListsapostsPageRoutingModule } from './listsaposts-routing.module';

import { ListsapostsPage } from './listsaposts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListsapostsPageRoutingModule
  ],
  declarations: [ListsapostsPage]
})
export class ListsapostsPageModule {}
