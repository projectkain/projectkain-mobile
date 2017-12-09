import { SearchFilterPage } from './../search-filter/search-filter';
import { Observable } from 'rxjs/Observable';
import { FoodItem } from './../../models/foodItem';
import { Component } from '@angular/core';
import { Restaurant } from './../../models/restaurant';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

@IonicPage()
@Component({
  selector: 'page-menu-items',
  templateUrl: 'menu-items.html',
})
export class MenuItemsPage {
  items: any[];
  defaultLogo: string
  menu: Observable<FoodItem[]>;
  restaurant: Restaurant;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private restaurantProvider: RestaurantProvider) {
  }

  ionViewWillEnter() {
    this.restaurant = this.navParams.get('restaurant');
    this.menu = this.restaurantProvider.getMenu(this.restaurant.id);
  }

  filter(){
    let modal = this.modalCtrl.create(SearchFilterPage);
    modal.present();
  }

  search(event) {

  }

}
