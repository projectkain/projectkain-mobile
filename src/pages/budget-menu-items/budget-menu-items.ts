import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './../../models/restaurant';
import { FoodItem } from './../../models/foodItem';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-budget-menu-items',
  templateUrl: 'budget-menu-items.html',
})
export class BudgetMenuItemsPage {

  restaurant: Restaurant;
  menu: Observable<FoodItem[]>;
  budget: Object;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider) {

    this.restaurant = this.navParams.get('restaurant');
    this.budget = this.navParams.get('budget');
    this.menu = this.restaurantProvider.getMenuByBudget(this.restaurant.id, this.budget);
  }

  ionViewDidLoad() {
  }
}
