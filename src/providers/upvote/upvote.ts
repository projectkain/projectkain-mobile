import { Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { Upvote } from './../../models/upvote';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class UpvoteProvider {


  constructor(
    private authProvider: AuthProvider,
    private fb: FirebaseApp,
    private db: AngularFireDatabase) {
  }

  getUserUpvotes() {
  }

  getRestaurantUpvotes(id) {
  }

  getFBReference(userId, restoId) {
    const upvoteId = `${userId}-${restoId}`;
    return this.fb.database().ref(`/upvotes/${upvoteId}`);
  }

  getAFReference() {
    return this.db.object('/upvotes').valueChanges();
  }

  async setUpvote(restoId) {
    // const userId = this.authProvider.getCurrentUserId();
    const userId = 'RXdoBLpO7KTOIS7ScDZTglVJJMe2';
    const upvoteId = `${userId}-${restoId}`;
    const upvoteRef = this.fb.database().ref(`/upvotes/${upvoteId}`);
    const restoRef = this.fb.database().ref(`/restaurants/${restoId}/upvotes`);

    const transaction = await upvoteRef.transaction(upvote => {
      if(upvote === null) {
        return { userId, restoId };
      }
      else {
        return null;
      }
    });

    if(transaction.committed) {
      if(transaction.snapshot.exists()) {
        restoRef.transaction(upvotes => {
          return this.clampMin(upvotes+1, 0);
        });
      }
      else {
        restoRef.transaction(upvotes => {
          return this.clampMin(upvotes-1, 0);
        });
      }
    }

  }

  async upvoteExists(userId, restoId) {
    const upvoteId = `${userId}-${restoId}`;
    const upvote = await this.fb.database().ref(`/upvotes/${upvoteId}`).once('value');
    return upvote.exists();
  }

  clampMin(value, min) {
    if(value < min) {
      return min;
    }
    return value;
  }

}
