import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {
  budget = 150;
  constructor(private navCtrl: NavController) {}

  proceed(budget) {
    this.navCtrl.push('BudgetSelectRestaurantPage', { budget });
  }
}
