import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(auth => this.authState = auth);

  }

  isAuthenticated() {
    return this.authState !== null;
  }

  getCurrentUser() {
    return this.isAuthenticated() ? this.authState : null;
  }

  getCurrentUserId(): string {
    return this.isAuthenticated() ? this.authState.uid : '';
  }

  async logIn() {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      const credentials = await this.afAuth.auth.signInWithRedirect(provider);
      this.authState = credentials.user;
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
