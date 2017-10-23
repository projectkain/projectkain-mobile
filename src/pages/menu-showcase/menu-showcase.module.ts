import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuShowcasePage } from './menu-showcase';

@NgModule({
  declarations: [
    MenuShowcasePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuShowcasePage),
  ],
})
export class MenuShowcasePageModule {}
