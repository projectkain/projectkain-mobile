import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-items',
  templateUrl: 'menu-items.html',
})
export class MenuItemsPage {
  items: any[];
  defaultLogo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.defaultLogo = this.navParams.get('logo');
    this.items = new Array(20);
  }
}
