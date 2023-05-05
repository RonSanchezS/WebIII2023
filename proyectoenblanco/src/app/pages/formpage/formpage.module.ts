import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormpagePageRoutingModule } from './formpage-routing.module';

import { FormpagePage } from './formpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormpagePageRoutingModule
  ],
  declarations: [FormpagePage]
})
export class FormpagePageModule {}
