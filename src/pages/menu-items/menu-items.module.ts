import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuItemsPage } from './menu-items';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    MenuItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuItemsPage),
    IonicImageLoader,
    ComponentsModule
  ],
})
export class MenuItemsPageModule {}
