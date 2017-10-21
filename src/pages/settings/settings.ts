import { FirstRunPage } from './../pages';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { App } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    private fb: Facebook,
    private nativeStorage: NativeStorage) { }

  async dologOut() {
    try {
      await this.fb.logout();
      await this.nativeStorage.remove('user');
      this.app.getRootNav().setRoot(FirstRunPage);
    } catch(e) {
      throw new Error(e);
    }
  }







}
