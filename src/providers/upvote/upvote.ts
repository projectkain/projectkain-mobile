import { Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { Upvote } from './../../models/upvote';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from 'angularfire2/firestore';



@Injectable()
export class UpvoteProvider {

  private upvoteCollection: AngularFirestoreCollection<Upvote>;

  constructor(
    private afs: AngularFirestore,
    private authProvider: AuthProvider) {
    this.upvoteCollection = this.afs.collection('upvotes');
  }

  getUserUpvotes() {
    const id = this.authProvider.getCurrentUserId();
    return this.afs.collection('upvotes', ref => {
      return ref.where('userId', '==', id);
    }).valueChanges();
  }

  getRestaurantUpvotes(id) {
    return this.afs.collection('upvotes', ref => {
      return ref.where('restoId', '==', id);
    }).valueChanges();
  }

  setUpvote(restoId) {
    const userId = this.authProvider.getCurrentUserId();
    const upvote: Upvote = { userId, restoId };
    const upvotePath = `${userId}^${restoId}`;
    const newRef = this.upvoteCollection.doc(upvotePath);
    newRef.update(upvote)
      .then(async () => {
        await newRef.delete();
      })
      .catch(error => {
        newRef.set(upvote);
      });
  }

  checkUpvoted(id) {

  }

}
