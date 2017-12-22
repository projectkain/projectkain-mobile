import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuShowcasePage } from './menu-showcase';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MenuShowcasePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuShowcasePage),
    ComponentsModule
  ],
})
export class MenuShowcasePageModule {}
