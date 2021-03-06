import { SearchFilterPage } from './../search-filter/search-filter';
import { Observable } from 'rxjs/Observable';
import { FoodItem } from './../../models/foodItem';
import { Component } from '@angular/core';
import { Restaurant } from './../../models/restaurant';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { FoodItemProvider } from '../../providers/food-item/food-item';
import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-menu-items',
  templateUrl: 'menu-items.html',
})
export class MenuItemsPage {
  items: any[];
  defaultLogo: string
  menu: Array<FoodItem> = [];
  temp: Array<FoodItem> = [];
  restaurant: Restaurant;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private restaurantProvider: RestaurantProvider,
    private foodItemProvider: FoodItemProvider) {
  }

  ionViewWillEnter() {
    this.restaurant = this.navParams.get('restaurant');
    this.foodItemProvider.getRestoMenu(this.restaurant.id).subscribe((foods:Array<FoodItem>) => {
      this.temp = this.menu = foods;
    });
  }

  filter(){
    let modal = this.modalCtrl.create(SearchFilterPage);
    modal.present();
  }

  search(event) {
    this.menu = this.temp;
    const value = event.target.value;
    if(value && value.trim() != '') {
      this.menu = _.filter(this.menu, item => {
        return item.Name.trim().toLowerCase().includes(value.trim().toLowerCase());
      });
    }
  }

  createRow(items) {
    var itemsPerRow = 2
    return Array.from(Array(Math.ceil(items.length / itemsPerRow)).keys());
  }

}
