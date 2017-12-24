import { ComponentsModule } from './../../components/components.module';
import { IonicImageLoader } from 'ionic-image-loader';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetMenuItemsPage } from './budget-menu-items';

@NgModule({
  declarations: [
    BudgetMenuItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetMenuItemsPage),
    IonicImageLoader,
    ComponentsModule
  ],
})
export class BudgetMenuItemsPageModule {}
