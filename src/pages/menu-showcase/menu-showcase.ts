import { Restaurant } from './../../models/restaurant';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

}
