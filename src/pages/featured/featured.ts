import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Restaurant } from './../../models/restaurant';
import { Observable } from 'rxjs/Observable';
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
  private hotList: any[] = [];
  private newList: any[] = [];
  private upvotesList: Restaurant[] = null;
  private featured: string = 'Upvotes';

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider) {
  }

  ionViewDidLoad() {

    this.getHotList();
    this.getNewList();
    this.getUpvotesList();

  }

  getHotList() {
    // this.hotList = this.restaurantProvider.getHotList();
  }

  getNewList() {
    // this.newList = this.restaurantProvider.getNewList();
  }

  getUpvotesList() {
    this.restaurantProvider.getUpvotesList().subscribe(res => {
      this.upvotesList = res;
    })
  }


}
