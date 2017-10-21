import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {
  budget = 150;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
