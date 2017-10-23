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
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: RestaurantProvider) {
    this.restaurants = this.provider.getAll();
  }

  select(restaurant: Restaurant) {
    this.navCtrl.push('MenuShowcasePage', { restaurant });
  }

}
