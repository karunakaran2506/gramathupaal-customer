import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipes/image/image.pipe';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [ImagePipe],
  imports: [CommonModule, IonicModule, MaterialModule],
  exports: [ImagePipe, MaterialModule],
})
export class SharedModule {}
