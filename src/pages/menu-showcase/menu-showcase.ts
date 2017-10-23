import { Restaurant } from './../../models/restaurant';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-showcase',
  templateUrl: 'menu-showcase.html',
})
export class MenuShowcasePage {
  restaurant: Restaurant;
  pageTitle: string;
  defaultLogo: string;
  bestsellers: any[];
  items: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) {
    this.restaurant = this.navParams.get('restaurant');
    this.pageTitle = this.navParams.get('restaurant').name;
    this.defaultLogo = this.navParams.get('restaurant').logo;
    this.bestsellers = new Array(4);
    this.items = new Array(6);
  }

  viewAll() {
    this.navCtrl.push('MenuItemsPage', {
      logo: this.defaultLogo
    });
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
