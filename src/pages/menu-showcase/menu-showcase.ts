import { MenuItemsPage } from './../menu-items/menu-items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-showcase',
  templateUrl: 'menu-showcase.html',
})
export class MenuShowcasePage {
  pageTitle: string;
  defaultLogo: string;
  bestsellers: any[];
  items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageTitle = this.navParams.get('name');
    this.defaultLogo = this.navParams.get('logo');
    this.bestsellers = new Array(4);
    this.items = new Array(6);
  }

  viewAll(){
    this.navCtrl.push(MenuItemsPage, {
      logo: this.defaultLogo
    });
  }


}
