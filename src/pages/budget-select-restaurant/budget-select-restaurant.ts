import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Restaurant } from './../../models/restaurant';

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

  private restaurants: Observable<Restaurant[]>;

  budget:number = this.navParams.get('budget');
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider) {
    this.restaurants = this.restaurantProvider.getRestaurants();
  }

  ionViewDidLoad() {}

  select(restaurant: Restaurant) {
    this.navCtrl.push('BudgetMenuItemsPage', {
      budget: this.budget,
      restaurant: restaurant
    });
  }
}
