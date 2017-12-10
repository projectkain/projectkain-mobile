import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Restaurant } from './../../models/restaurant';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  private restaurants: Observable<Restaurant[]>;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider) {
  }

  ionViewDidLoad() {
    // this.restaurants = this.restaurantProvider.getRestaurants();
  }

  search(event) {
    this.restaurants = this.restaurantProvider.getRestaurants();
    const value = event.target.value;
    if(value && value.trim() != '') {
      this.restaurants = this.restaurants.map(items => {
        return items.filter(e => {
          return e.name.trim().toLowerCase().includes(value.trim().toLowerCase());
        });
      });
    }
  }
}
