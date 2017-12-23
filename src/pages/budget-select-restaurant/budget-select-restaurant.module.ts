import { ComponentsModule } from './../../components/components.module';
import { IonicImageLoader } from 'ionic-image-loader';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetSelectRestaurantPage } from './budget-select-restaurant';

@NgModule({
  declarations: [
    BudgetSelectRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetSelectRestaurantPage),
    IonicImageLoader,
    ComponentsModule
  ],
})
export class BudgetSelectRestaurantPageModule {}
