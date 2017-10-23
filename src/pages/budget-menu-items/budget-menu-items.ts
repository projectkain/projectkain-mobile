import { Component } from '@angular/core';
import { Restaurant } from './../../models/restaurant';
import { AlertController, IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-budget-menu-items',
  templateUrl: 'budget-menu-items.html',
})
export class BudgetMenuItemsPage {
  restaurant: Restaurant;
  items: any[];
  defaultLogo: string;
  budget: number;
  pageTitle: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) {
    this.restaurant = this.navParams.get('restaurant');
    this.defaultLogo = this.navParams.get('restaurant').logo;
    this.items = new Array(20);
    this.budget = this.navParams.get('budget');
    this.pageTitle = this.navParams.get('restaurant').name;
  }

  moreInfo() {
    let actionSheet = this.actionSheetCtrl.create({
      title: `${this.restaurant.name}`,
      buttons: [
        {
          text: `Call ${this.restaurant.phone}`,
          handler: () => {
            console.log(this.restaurant.phone);
          }
        }, {
          text: 'Show Location',
          handler: () => {
            let alert = this.alertCtrl.create({
              title: `${this.restaurant.name}`,
              subTitle: `${this.restaurant.location}`,
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Show Map',
                  handler: () => {
                    console.log('Show Map clicked');
                  }
                }
              ]
            });
            alert.present();
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
