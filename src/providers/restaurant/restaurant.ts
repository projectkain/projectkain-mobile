import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../../models/restaurant';
import { FoodItem } from '../../models/foodItem';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

@Injectable()
export class RestaurantProvider {

  private restoCollection: AngularFirestoreCollection<Restaurant>;
  private restaurants: Observable<Restaurant[]>;

  constructor(private afs: AngularFirestore) {
    this.restoCollection = this.afs.collection('restaurants');
    this.restaurants = this.restoCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Restaurant;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getRestaurants() {
    return this.restaurants;
  }

  getMenu(restoId) {
    const restoDoc = this.afs.doc(`restaurants/${restoId}`);
    return restoDoc.collection<FoodItem>('fooditems', ref => {
      return ref.orderBy('Price', 'asc');
    }).valueChanges();
  }

  getMenuByBudget(restoId, budget) {
    const restoDoc = this.afs.doc(`restaurants/${restoId}`);
    return restoDoc.collection<FoodItem>('fooditems', ref => {
      return ref.where('Price', '<=', budget.upper)
      .where('Price', '>=', budget.lower)
      .orderBy('Price', 'asc');
    }).valueChanges();
  }


}
