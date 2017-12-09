import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './../../models/restaurant';
import { FoodItem } from './../../models/foodItem';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { IonicPage, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-budget-menu-items',
  templateUrl: 'budget-menu-items.html',
})
export class BudgetMenuItemsPage {

  restaurant: Restaurant;
  menu: Observable<FoodItem[]>;
  budget: Object;
  title: string = '';

  constructor(
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider) {
  }

  ionViewWillEnter() {
    this.restaurant = this.navParams.get('restaurant');
    this.budget = this.navParams.get('budget');
    this.menu = this.restaurantProvider.getMenuByBudget(this.restaurant.id, this.budget);
    this.title = this.restaurant.name;
  }

  search(event) {
    this.menu = this.restaurantProvider.getMenuByBudget(this.restaurant.id, this.budget);
    const value = event.target.value;
    if(value && value.trim() != '') {
      this.menu = this.menu.map(items => {
        return items.filter(e => {
          return e.Name.trim().toLowerCase().includes(value.trim().toLowerCase());
        });
      });
    }
  }

}
