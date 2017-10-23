import { Restaurant } from './../../models/restaurant';
import { RestaurantProvider } from './../../mocks/providers/restaurant';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget-select-restaurant',
  templateUrl: 'budget-select-restaurant.html',
})
export class BudgetSelectRestaurantPage {

  restaurants: Restaurant[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: RestaurantProvider) {
    this.restaurants = this.provider.getAll();
  }

  select(restaurant: Restaurant) {
    this.navCtrl.push('BudgetMenuItemsPage', {
      budget: this.navParams.get('budget'),
      restaurant: restaurant
    });
  }
}
