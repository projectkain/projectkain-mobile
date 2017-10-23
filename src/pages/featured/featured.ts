import { RestaurantProvider } from './../../mocks/providers/restaurant';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider) {
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
  }

  getNewList() {
    this.newList = this.restaurantProvider.getNew();
  }

  getUpvotesList() {
    this.upvotesList = this.restaurantProvider.getUpvotes();
  }


}
