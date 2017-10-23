import { SearchFilterPage } from './../search-filter/search-filter';
import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-items',
  templateUrl: 'menu-items.html',
})
export class MenuItemsPage {
  items: any[];
  defaultLogo: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController) {
    this.defaultLogo = this.navParams.get('logo');
    this.items = new Array(20);
  }

  filter(){
    let modal = this.modalCtrl.create(SearchFilterPage);
    modal.present();
  }
}
