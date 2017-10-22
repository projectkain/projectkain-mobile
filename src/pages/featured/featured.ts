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

  ngOnInit() {
    this.getHotList();
    this.getNewList();
    this.getUpvotesList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturedPage');
  }

  getHotList() {
    this.hotList = this.restaurantProvider.getHot();
    this.hotList = new Array(10);
  }

  getNewList() {
    this.newList = this.restaurantProvider.getNew();
    this.newList = new Array(10);
  }

  getUpvotesList() {
    this.upvotesList = this.restaurantProvider.getUpvotes();
    this.upvotesList = new Array(10);
  }


}
