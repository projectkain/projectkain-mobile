import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetMenuItemsPage } from './budget-menu-items';

@NgModule({
  declarations: [
    BudgetMenuItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetMenuItemsPage),
  ],
})
export class BudgetMenuItemsPageModule {}
