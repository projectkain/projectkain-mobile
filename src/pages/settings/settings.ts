import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

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

  public displayName: any;
  public email: any;
  public photoURL: any;

  constructor(private authProvider: AuthProvider) {
    const {
      displayName,
      email,
      photoURL
    } = this.authProvider.getCurrentUser();

    this.displayName = displayName;
    this.email = email;
    this.photoURL = photoURL;

  }

  async dologOut() {
    try {
      await this.authProvider.logOut();
    } catch(e) {
      throw new Error(e);
    }
  }

}
