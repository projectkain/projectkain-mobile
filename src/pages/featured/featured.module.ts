import { ComponentsModule } from './../../components/components.module';
import { IonicImageLoader } from 'ionic-image-loader';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeaturedPage } from './featured';

@NgModule({
  declarations: [
    FeaturedPage,
  ],
  imports: [
    IonicPageModule.forChild(FeaturedPage),
    IonicImageLoader,
    ComponentsModule
  ],
})
export class FeaturedPageModule {}
