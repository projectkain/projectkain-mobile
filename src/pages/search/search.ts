import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Restaurant } from './../../models/restaurant';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  private restaurants: Observable<Restaurant[]>;
  private searchTerm: string = null;
  @ViewChild('searchbar') searchbar;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider,
    private tabs: TabsPage) {
  }

  ionViewDidLoad() {
    this.restaurants = this.restaurantProvider.getAllRestaurants();
  }

  ionViewWillEnter() {
    this.searchbar.setFocus();
  }

  search(event) {
    this.restaurants = this.restaurantProvider.getAllRestaurants();
    this.searchTerm = event.target.value;
    if (this.searchTerm && this.searchTerm.trim() != '') {
      this.restaurants = this.restaurants.map(items => {
        return items.filter(e => {
          return e.name.trim().toLowerCase().includes(this.searchTerm.trim().toLowerCase());
        });
      });
    }
  }
}
