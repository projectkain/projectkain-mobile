import { Injectable } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { FoodItem } from '../../models/foodItem';
import 'rxjs/add/operator/toPromise';
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
    }).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Restaurant;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
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

  getAllMenu() {
    return this.getRestaurants().map(restaurants => {
      return restaurants.map(async restaurant => {
        const data = await this.restoCollection.doc(restaurant.id).collection<FoodItem>('fooditems')
          .valueChanges().toPromise();
        restaurant.menu = data;
        return restaurant;
      });
    });
  }

  getMenuByBudget(restoId, budget) {
    const restoDoc = this.restoCollection.doc(restoId);
    return restoDoc.collection<FoodItem>('fooditems', ref => {
      return ref.where('Price', '<', budget.upper + 1)
        .where('Price', '>', budget.lower - 1)
        .orderBy('Price', 'asc');
    }).valueChanges();
  }

  getMaxPriceInResto(restoId) {
    const restoDoc = this.restoCollection.doc(restoId);
    return restoDoc.collection<FoodItem>('fooditems', ref => {
      return ref.orderBy('Price', 'desc').limit(1);
    }).valueChanges();
  }

  getMinPriceInResto(restoId) {
    const restoDoc = this.restoCollection.doc(restoId);
    return restoDoc.collection<FoodItem>('fooditems', ref => {
      return ref.orderBy('Price', 'asc').limit(1);
    }).valueChanges();
  }


}
