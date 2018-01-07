import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './../../models/restaurant';
import { FoodItem } from './../../models/foodItem';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { FoodItemProvider } from '../../providers/food-item/food-item';
import { AuthProvider } from '../../providers/auth/auth';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { UpvoteProvider } from '../../providers/upvote/upvote';
import { SMS } from '@ionic-native/sms';

import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-menu-showcase',
  templateUrl: 'menu-showcase.html',
})
export class MenuShowcasePage {
  restaurant: Restaurant;
  title: string = '';
  defaultLogo: string;
  userId: string;
  bestsellers: Array<FoodItem> = [];
  menu: Array<FoodItem> = [];
  upvoteExists: boolean = false;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private callNumber: CallNumber,
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider,
    private upvoteProvider: UpvoteProvider,
    private sms: SMS,
    private foodItemProvider: FoodItemProvider,
    private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    this.userId = this.authProvider.getCurrentUserId();
  }

  ionViewWillEnter() {
    this.restaurant = this.navParams.get('restaurant');
    this.checkUpvoted();
    this.title = this.restaurant.name;
    this.foodItemProvider.getRestoMenu(this.restaurant.id).subscribe((foods:Array<FoodItem>) => {
      this.menu = foods;
    });
  }

  viewAll(menu) {
    this.navCtrl.push('MenuItemsPage', {
      restaurant: this.restaurant
    });
  }

  presentActionSheet() {

    const sheet = { buttons: [] };
    const contactNumber = this.getContactNumber();

    if (contactNumber != '') {
      sheet.buttons.unshift({
        text: `Call ${contactNumber}`,
        handler: () => {
          this.callNumber.callNumber(contactNumber, true);
        }
      });

      sheet.buttons.unshift({
        text: `Send SMS to ${contactNumber}`,
        handler: () => {
          var options = {
            replaceLineBreaks: true,
            android: {
              intent: 'INTENT'
            }
          }
          this.sms.send(contactNumber, '', options);
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

    if (!this.upvoteExists) {
      sheet.buttons.unshift({
        text: `Upvote`,
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
    }
    else {
      sheet.buttons.unshift({
        text: `Remove Upvote`,
        role: 'destructive',
        handler: () => {
          this.doUpvote();
          let alert = this.alertCtrl.create({
            title: this.restaurant.name,
            message: `You have removed an upvote for ${this.restaurant.name}`,
            buttons: ['OK']
          });
          alert.present();
        }
      });
    }


    sheet.buttons.push({
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
      }
    });

    let actionSheet = this.actionSheetCtrl.create(sheet);
    actionSheet.present();
  }

  async doUpvote() {
    this.upvoteProvider.setUpvote(this.restaurant.id);
  }

  checkUpvoted() {
    this.upvoteProvider.getAFReference().subscribe(upvotes => {
      this.upvoteExists = _.has(upvotes, `${this.userId}-${this.restaurant.id}`);
    });
  }

  getContactNumber() {
    if (this.restaurant.contactNumber) {
      let contactNumber = this.restaurant.contactNumber.trim().replace(' ', '');
      return `(${contactNumber.substring(0,4)}) ${contactNumber.substring(4,7)} ${contactNumber.substring(7)}`
    }
    else {
      return '';
    }
  }

}
