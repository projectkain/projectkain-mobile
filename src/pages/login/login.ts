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

  doLogin() {
    try {
      this.authProvider.logIn();
    } catch(e) {
      throw new Error(e);
    }
  }
}
