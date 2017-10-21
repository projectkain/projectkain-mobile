import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public fb: Facebook,
    public nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
  }

  async doLogin() {
    try {

      const response = await this.fb.login(['public_profile']);
      const user = await this.fb.api(`/${response.authResponse.userID}?fields=name,email`, ['public_profile']);

      this.nativeStorage.setItem('user', {
        name: user.name,
        email: user.email,
      });

      this.navCtrl.push(MainPage);

    } catch(e) {
      throw new Error(e);
    }

  }
}
