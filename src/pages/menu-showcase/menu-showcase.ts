import { Restaurant } from './../../models/restaurant';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FoodItem } from './../../models/foodItem';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { UpvoteProvider } from '../../providers/upvote/upvote';
import { SMS } from '@ionic-native/sms';


@IonicPage()
@Component({
  selector: 'page-menu-showcase',
  templateUrl: 'menu-showcase.html',
})
export class MenuShowcasePage {
  restaurant: Restaurant;
  title: string = '';
  defaultLogo: string;
  bestsellers: any[] = null;
  menu: Observable<FoodItem[]> = null;
  upvoted: boolean;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private callNumber: CallNumber,
    private navCtrl: NavController,
    private navParams: NavParams,
    private restaurantProvider: RestaurantProvider,
    private upvoteProvider: UpvoteProvider,
    private sms: SMS) {
  }

  ionViewDidLoad() {
    this.restaurant = this.navParams.get('restaurant');
    this.menu = this.restaurantProvider.getMenu(this.restaurant.id);
    this.title = this.restaurant.name;
    this.checkUpvoted();
  }

  viewAll() {
    this.navCtrl.push('MenuItemsPage', {
      restaurant: this.restaurant,
    });
  }

  async presentActionSheet() {

    let sheet = {
      buttons: []
    }

    if (this.restaurant.contactNumber != '') {
      sheet.buttons.unshift({
        text: `Call ${this.getContactNumber()}`,
        handler: () => {
          this.callNumber.callNumber(this.getContactNumber(), true);
        }
      });

      sheet.buttons.unshift({
        text: `Send SMS to ${this.getContactNumber()}`,
        handler: () => {
          var options = {
            replaceLineBreaks: true,
            android: {
              intent: 'INTENT'
            }
          }
          this.sms.send(this.getContactNumber(), '', options);
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

    if (!this.upvoted) {
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

  doUpvote() {
    this.upvoteProvider.setUpvote(this.restaurant.id);
  }

  checkUpvoted() {
    this.upvoteProvider.getUserUpvotes().subscribe(upvotes => {
      if (upvotes.filter(u => u.restoId === this.restaurant.id).length > 0) {
        this.upvoted = true;
      }
      else {
        this.upvoted = false;
      }

    });
  }

  getContactNumber() {
    if (this.restaurant.contactNumber) {
      let contactNumber = this.restaurant.contactNumber.trim().replace(' ', '');
      return `(${contactNumber.substring(0,4)}) ${contactNumber.substring(4,7)} ${contactNumber.substring(7)}`
    }
  }

}
