import { Restaurant } from './../../models/restaurant';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController } from 'ionic-angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  private restaurants: Array<Restaurant> = [];
  constructor(
    private navCtrl: NavController,
    private restaurantProvider: RestaurantProvider) {
  }

  ionViewDidLoad() {
    this.fetchData();
  }

  select(restaurant: Restaurant) {
    this.navCtrl.push('MenuShowcasePage', { restaurant });
  }

  fetchData() {
    this.restaurantProvider.getAllRestaurants().subscribe(res => {
      this.restaurants = res;
    });
  }

  doRefresh(refresh) {
    this.restaurantProvider.getAllRestaurants()
      .subscribe(res => {
        this.restaurants = res;
        setTimeout(() => {
          refresh.complete();
        }, 2000);
      });
  }

  createRow(restaurants) {
    var itemsPerRow = 2
    return Array.from(Array(Math.ceil(restaurants.length / itemsPerRow)).keys());
  }

}
