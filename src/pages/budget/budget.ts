import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController } from 'ionic-angular';
import { FoodItemProvider } from '../../providers/food-item/food-item';
import { _ } from 'lodash';

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {

  private budget:Object = {
    lower: 10,
    upper: 500
  };

  constructor(
    private navCtrl: NavController,
    private foodItemProvider: FoodItemProvider) {}

  proceed(budget) {
    this.navCtrl.push('BudgetSelectRestaurantPage', { budget });
  }
}
