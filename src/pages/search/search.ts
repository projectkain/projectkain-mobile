import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { FoodItemProvider } from '../../providers/food-item/food-item';
import { Restaurant } from './../../models/restaurant';
import { FoodItem } from './../../models/foodItem';
import { TabsPage } from '../tabs/tabs';

import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  private restaurants: Array<Restaurant> = [];
  private tempResto: Array<Restaurant> = [];
  private fooditems: Array<FoodItem> = [];
  private tempfood: Array<FoodItem> = [];
  private searchTerm: string = null;
  private selected: string = 'restaurants';

  @ViewChild('searchbar') searchbar;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider,
    private foodItemProvider: FoodItemProvider,
    private tabs: TabsPage) {
  }

  ionViewDidLoad() {
    this.restaurantProvider.getAllRestaurants().subscribe(restaurants => {
      this.tempResto = this.restaurants = restaurants;
    });
    this.foodItemProvider.getAllFoodItems().subscribe(foods => {
      this.tempfood = this.fooditems = foods;
    });
  }

  ionViewWillEnter() {
    this.searchbar.setFocus();
  }

  search(event) {
    this.restaurants = this.tempResto;
    this.fooditems = this.tempfood;

    this.searchTerm = event.target.value;

    if (this.searchTerm && this.searchTerm.trim() != '' && this.searchTerm.trim().length >= 3) {
      this.restaurants = _.filter(this.restaurants, item => {
        return item.name.trim().toLowerCase().includes(this.searchTerm.trim().toLowerCase());
      });
      this.fooditems = _.filter(this.fooditems, item => {
        return item.Name.trim().toLowerCase().includes(this.searchTerm.trim().toLowerCase());
      });
    }
  }

  getOneResto(id) {
    return _.find(this.tempResto, e => e.id === id);
  }

}
