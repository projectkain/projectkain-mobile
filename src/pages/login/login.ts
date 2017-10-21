import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  ToastController,
  Platform
} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase/app';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private fb: Facebook,
    private auth: AngularFireAuth,
    private platform: Platform) {
  }

  ionViewDidLoad() {}

  ionViewCanEnter() {

  }

  async doLogin() {
    try {
      if(this.platform.is('cordova')) {
        const res = await this.fb.login(['email','public_profile']);
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        await firebase.auth().signInWithCredential(facebookCredential);
      }
      else {
        const res = await this.auth.auth
          .signInWithPopup(new firebase.auth.FacebookAuthProvider());
      }

      this.navCtrl.setRoot(MainPage);
    } catch(err) {
      throw new Error(err)
    }
  }
}
