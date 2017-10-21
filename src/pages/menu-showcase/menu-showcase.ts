import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuShowcasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuShowcasePage');
  }

}
