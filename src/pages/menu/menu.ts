import { Restaurant } from './../../models/restaurant';
import { RestaurantProvider } from './../../mocks/providers/restaurant';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  restaurants: Restaurant[];
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider) {
    this.restaurants = this.restaurantProvider.getAll();
  }

  select(restaurant: Restaurant) {
    this.navCtrl.push('MenuShowcasePage', { restaurant });
  }

}
