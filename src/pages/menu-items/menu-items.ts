import { SearchFilterPage } from './../search-filter/search-filter';
import { Observable } from 'rxjs/Observable';
import { FoodItem } from './../../models/foodItem';
import { Component } from '@angular/core';
import { Restaurant } from './../../models/restaurant';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { FoodItemProvider } from '../../providers/food-item/food-item';

@IonicPage()
@Component({
  selector: 'page-menu-items',
  templateUrl: 'menu-items.html',
})
export class MenuItemsPage {
  items: any[];
  defaultLogo: string
  menu: Observable<FoodItem[]> = null;
  temp: Observable<FoodItem[]> = null;
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
    this.temp = this.menu = this.foodItemProvider.getRestoMenu(this.restaurant.id);
  }

  filter(){
    let modal = this.modalCtrl.create(SearchFilterPage);
    modal.present();
  }

  search(event) {
    this.menu = this.temp;
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
