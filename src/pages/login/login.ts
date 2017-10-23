import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    private authProvider: AuthProvider,
    private toastCtrl: ToastController) {    
  }

  ionViewDidLoad() {}
  ionViewCanEnter() {}

  doLogin() {
    try {
      this.authProvider.logIn();
      this.toastCtrl.create({
        message: `Successfully logged in!`,
        duration: 2000,
        position: 'top',
      }).present();
    } catch(e) {
      throw new Error(e);
    }
  }
}
