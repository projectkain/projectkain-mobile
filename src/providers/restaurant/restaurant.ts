import { Injectable } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { FoodItem } from '../../models/foodItem';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Injectable()
export class RestaurantProvider {

  private restoCollection: AngularFirestoreCollection<Restaurant>;

  constructor(private afs: AngularFirestore) {
    this.restoCollection = this.afs.collection('restaurants');
  }

  getRestaurants() {
    return this.restoCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Restaurant;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getUpvotesList() {
    return this.afs.collection<Restaurant>('restaurants', ref => {
      return ref.where('upvotesRank', '>', 0).orderBy('upvotesRank', 'asc').limit(20);
    }).valueChanges();
  }

  // getHotList() {
  //
  // }
  //
  // getNewList() {
  //
  // }

  getMenu(restoId) {
    const restoDoc = this.restoCollection.doc(restoId);
    return restoDoc.collection<FoodItem>('fooditems', ref => {
      return ref.orderBy('Price', 'asc');
    }).valueChanges();
  }

  getMenuByBudget(restoId, budget) {
    const restoDoc = this.restoCollection.doc(restoId);
    return restoDoc.collection<FoodItem>('fooditems', ref => {
      return ref.where('Price', '<=', budget.upper)
      .where('Price', '>=', budget.lower)
      .orderBy('Price', 'asc');
    }).valueChanges();
  }


}
