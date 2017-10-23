import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private authState: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    private fb: Facebook) {

    this.afAuth.authState.subscribe(auth => this.authState = auth);

  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

  getCurrentUserId() {
    return this.afAuth.auth.currentUser.uid;
  }

  async logIn() {
    try {
      const response  = await this.fb.login(['email', 'public_profile']);
      const credentials = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);
      await firebase.auth().signInWithCredential(credentials);
      this.authState = this.afAuth.auth.currentUser;
    } catch(e) {
      throw new Error(e);
    }
  }

  async logOut() {
    try {
      await this.afAuth.auth.signOut();
      this.authState = null;
    } catch(e) {
      throw new Error(e);
    }
  }

}
