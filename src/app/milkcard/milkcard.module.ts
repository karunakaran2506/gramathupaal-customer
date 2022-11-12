import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilkcardPageRoutingModule } from './milkcard-routing.module';

import { MilkcardPage } from './milkcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilkcardPageRoutingModule
  ],
  declarations: [MilkcardPage]
})
export class MilkcardPageModule {}
