import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
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
    private fb: Facebook,
    private afAuth: AngularFireAuth,
    private platform: Platform) {
  }

  ionViewDidLoad() {}
  ionViewCanEnter() {}

  async doLogin() {
    try {
      if(this.platform.is('cordova')) {
        const res = await this.fb.login(['email','public_profile']);
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        await firebase.auth().signInWithCredential(facebookCredential);
      }
      else {
        await this.afAuth.auth
          .signInWithPopup(new firebase.auth.FacebookAuthProvider());
      }

      this.navCtrl.setRoot(MainPage);
    } catch(err) {
      throw new Error(err)
    }
  }
}
