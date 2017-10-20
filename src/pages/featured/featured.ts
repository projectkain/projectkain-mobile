import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestaurantProvider } from '../../providers/providers';
/**
 * Generated class for the FeaturedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html',
})
export class FeaturedPage {
  hotList = [];
  newList = [];
  upvotesList = [];

  featured: string = 'Hot';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restaurantProvider: RestaurantProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturedPage');
  }

  getHotList() {
    this.hotList = this.restaurantProvider.getHot();
  }

  getNewList() {
    this.newList = this.restaurantProvider.getNew();
  }

  getUpvotes() {
    this.upvotesList = this.restaurantProvider.getUpvotes();
  }


}
