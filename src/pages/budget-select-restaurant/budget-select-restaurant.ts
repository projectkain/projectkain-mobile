import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodItemProvider } from '../../providers/food-item/food-item';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Restaurant } from './../../models/restaurant';
import { FoodItem } from './../../models/foodItem';
import 'rxjs/add/operator/toPromise';
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
  private restaurants: Array<Restaurant> = [];
  private budget: number;
  private ids: any;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private foodItemProvider: FoodItemProvider,
    private restaurantProvider: RestaurantProvider, ) {
  }

  ionViewWillEnter() {
    this.budget = this.navParams.get('budget');
    this.foodItemProvider.getRestaurantByBudget(this.budget).subscribe(ids => {
      this.ids = ids;
      this.restaurantProvider.getRestaurantsById(ids).subscribe((restaurants: Array<Restaurant>) => {
        this.restaurants = restaurants;
      });
    });
  }

  select(restaurant: Restaurant) {
    this.navCtrl.push('BudgetMenuItemsPage', {
      budget: this.budget,
      restaurant: restaurant
    });
  }

  createRow(restaurants) {
    var itemsPerRow = 2
    return Array.from(Array(Math.ceil(restaurants.length / itemsPerRow)).keys());
  }

}
