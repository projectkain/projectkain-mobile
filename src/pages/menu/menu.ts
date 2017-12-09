import { Restaurant } from './../../models/restaurant';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  private restaurants: Observable<Restaurant[]>;
  constructor(
    private navCtrl: NavController,
    private restaurantProvider: RestaurantProvider) {
  }

  ionViewDidLoad() {
    this.restaurants = this.restaurantProvider.getRestaurants();
  }

  select(restaurant: Restaurant) {
    this.navCtrl.push('MenuShowcasePage', { restaurant });
  }

}
