import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './../../models/restaurant';
import { FoodItem } from './../../models/foodItem';
import { FoodItemProvider } from '../../providers/food-item/food-item';
import { IonicPage, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-budget-menu-items',
  templateUrl: 'budget-menu-items.html',
})
export class BudgetMenuItemsPage {

  restaurant: Restaurant;
  menu: Array<FoodItem> = [];
  temp: Array<FoodItem> = [];
  budget: Object;
  title: string = '';

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private callNumber: CallNumber,
    private navParams: NavParams,
    private foodItemProvider: FoodItemProvider) {
  }

  ionViewWillEnter() {
    this.restaurant = this.navParams.get('restaurant');
    this.budget = this.navParams.get('budget');
    this.title = this.restaurant.name;
    this.foodItemProvider.getFoodItemByBudget(this.restaurant.id, this.budget).subscribe((foods:Array<FoodItem>) => {
      this.temp = this.menu = foods;
    });
  }

  search(event) {
    this.menu = this.temp;
    const value = event.target.value;
    if (value && value.trim() != '') {
      this.menu = _.filter(this.menu, item => {
        return item.Name.trim().toLowerCase().includes(value.trim().toLowerCase());
      });
    }
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

  createRow(menu) {
    var itemsPerRow = 2
    return Array.from(Array(Math.ceil(menu.length / itemsPerRow)).keys());
  }


}
