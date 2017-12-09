import { Restaurant } from './../../models/restaurant';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FoodItem } from './../../models/foodItem';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-showcase',
  templateUrl: 'menu-showcase.html',
})
export class MenuShowcasePage {
  restaurant: Restaurant;
  title: string = '';
  defaultLogo: string;
  bestsellers: any[];
  menu: Observable<FoodItem[]>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider) {
  }

  ionViewWillEnter() {
    this.restaurant = this.navParams.get('restaurant');
    this.menu = this.restaurantProvider.getMenu(this.restaurant.id);
    this.title = this.restaurant.name;
  }

  viewAll() {
    this.navCtrl.push('MenuItemsPage', {
      restaurant: this.restaurant,
    });
  }

}
