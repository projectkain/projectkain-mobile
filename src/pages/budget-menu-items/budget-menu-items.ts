import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BudgetMenuItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget-menu-items',
  templateUrl: 'budget-menu-items.html',
})
export class BudgetMenuItemsPage {
  items: any[];
  defaultLogo: string;
  budget: number;
  pageTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.defaultLogo = this.navParams.get('restaurant').logo;
    this.items = new Array(20);
    this.budget = this.navParams.get('budget');
    this.pageTitle = this.navParams.get('restaurant').name;
  }
}
