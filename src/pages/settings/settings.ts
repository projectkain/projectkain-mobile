import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseProvider } from '../../providers/database/database';

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

  private user: any;

  constructor(
    private dbProvider: DatabaseProvider,
    private afAuth: AngularFireAuth) {
    this.user = this.dbProvider.getCurrentUser();
  }

  async dologOut() {
    try {
      await this.afAuth.auth.signOut();
    } catch(e) {
      throw new Error(e);
    }
  }







}
