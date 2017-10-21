import { FirstRunPage } from './../pages';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseProvider } from '../../providers/database/database';
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

  private user: any = this.dbProvider.getCurrentUser();

  constructor(
    private fb: Facebook,
    private dbProvider: DatabaseProvider,
    private afAuth: AngularFireAuth) { }

  async dologOut() {
    try {
      await this.afAuth.auth.signOut();
    } catch(e) {
      throw new Error(e);
    }
  }







}
