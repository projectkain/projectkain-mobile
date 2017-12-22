import { ComponentsModule } from './../../components/components.module';
import { IonicImageLoader } from 'ionic-image-loader';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import { ContentPlaceholderComponent } from '../../components/content-placeholder/content-placeholder';

@NgModule({
  declarations: [
    MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
    IonicImageLoader,
    ComponentsModule
  ],
})
export class MenuPageModule { }
