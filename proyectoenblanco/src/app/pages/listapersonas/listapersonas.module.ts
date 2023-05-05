import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapersonasPageRoutingModule } from './listapersonas-routing.module';

import { ListapersonasPage } from './listapersonas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapersonasPageRoutingModule
  ],
  declarations: [ListapersonasPage]
})
export class ListapersonasPageModule {}
