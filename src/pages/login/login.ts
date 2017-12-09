import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    private authProvider: AuthProvider) {

  }

  ionViewDidLoad() {}
  ionViewCanEnter() {}

  async doLogin() {
    try {
      await this.authProvider.logIn();
    } catch(e) {
      throw new Error(e);
    }
  }
}
