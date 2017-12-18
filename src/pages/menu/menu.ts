import { Restaurant } from './../../models/restaurant';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController } from 'ionic-angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  private restaurants: Restaurant[];
  constructor(
    private navCtrl: NavController,
    private restaurantProvider: RestaurantProvider,
    private spinnerDialog: SpinnerDialog) {
  }

  ionViewDidLoad() {
    this.spinnerDialog.show(null, "Please wait");
    this.fetchData();
  }

  select(restaurant: Restaurant) {
    this.navCtrl.push('MenuShowcasePage', { restaurant });
  }

  fetchData() {
    this.restaurantProvider.getRestaurants()
      .subscribe(res => {
        this.restaurants = res;
        this.spinnerDialog.hide();
      });
  }

  doRefresh(refresh) {
    this.restaurantProvider.getRestaurants()
      .subscribe(res => {
        this.restaurants = res;
        setTimeout(() => {
          refresh.complete();
        }, 2000);
      });
  }

}
