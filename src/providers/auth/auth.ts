import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { Observable } from 'rxjs/Observable';
import { User } from './../../models/user';
import * as firebase from 'firebase';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

@Injectable()
export class AuthProvider {

  private authState: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    private fb: Facebook,
    private afs: AngularFirestore) {
    this.authState = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }


  updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data)
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
      this.updateUserData(this.getCurrentUser());
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
