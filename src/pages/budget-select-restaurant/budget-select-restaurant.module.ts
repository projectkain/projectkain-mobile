import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetSelectRestaurantPage } from './budget-select-restaurant';

@NgModule({
  declarations: [
    BudgetSelectRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetSelectRestaurantPage),
  ],
})
export class BudgetSelectRestaurantPageModule {}
