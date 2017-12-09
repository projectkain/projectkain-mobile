import { Restaurant } from './../../models/restaurant';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FoodItem } from './../../models/foodItem';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { UpvoteProvider } from '../../providers/upvote/upvote';
@IonicPage()
@Component({
  selector: 'page-menu-showcase',
  templateUrl: 'menu-showcase.html',
})
export class MenuShowcasePage {
  restaurant: Restaurant;
  title: string = '';
  defaultLogo: string;
  bestsellers: any[];
  menu: Observable<FoodItem[]>;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private callNumber: CallNumber,
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider,
    private upvoteProvider: UpvoteProvider) {
  }

  ionViewWillEnter() {
    this.restaurant = this.navParams.get('restaurant');
    this.menu = this.restaurantProvider.getMenu(this.restaurant.id);
    this.title = this.restaurant.name;
  }

  viewAll() {
    this.navCtrl.push('MenuItemsPage', {
      restaurant: this.restaurant,
    });
  }

  presentActionSheet() {
    let sheet = {
      title: this.restaurant.name,
      buttons: []
    }

    if (this.restaurant.contactNumber != '') {
      sheet.buttons.unshift({
        text: `Call ${this.restaurant.contactNumber}`,
        handler: () => {
          this.callNumber.callNumber(this.restaurant.contactNumber, true);
        }
      });
    }

    sheet.buttons.unshift({
      text: 'Show Details',
      handler: () => {
        let alert = this.alertCtrl.create({
          title: this.restaurant.name,
          message: `<p>Store Hours: ${this.restaurant.storeHours}</p>
                        <span>${this.restaurant.address}</span>`,
          buttons: ['OK']
        });
        alert.present();
      }
    });

    sheet.buttons.unshift({
      text: 'Upvote',
      handler: () => {
        this.doUpvote();
        let alert = this.alertCtrl.create({
          title: this.restaurant.name,
          message: `You have upvoted ${this.restaurant.name}`,
          buttons: ['OK']
        });
        alert.present();
      }
    });

    sheet.buttons.push({
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
      }
    });

    let actionSheet = this.actionSheetCtrl.create(sheet);
    actionSheet.present();
  }

  doUpvote() {
    this.upvoteProvider.setUpvote(this.restaurant.id);
  }

}
