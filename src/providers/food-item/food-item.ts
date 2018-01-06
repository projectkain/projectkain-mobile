import { Injectable } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { FoodItem } from '../../models/foodItem';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FoodItemProvider {

  private fooditems: Observable<FoodItem[]>;

  constructor(private db: AngularFireDatabase) {
    this.fooditems = db.list('/fooditems').valueChanges();
  }

  getAllFoodItems() {
    return this.fooditems;
  }

  getRestoMenu(id) {
    return this.db.list('/fooditems', ref => {
      return ref.orderByChild('restaurantId').equalTo(id);
    }).valueChanges();
  }

  getRestaurantByBudget(budget) {
    return this.db.list('/fooditems', ref => {
      return ref.orderByChild('Price').startAt(budget.lower).endAt(budget.upper);
    }).valueChanges().map(actions => {
      return actions.reduce((accu, e:FoodItem) => {
        accu[e.restaurantId] = accu[e.restaurantId] + 1 || 0;
        return accu;
      }, {});
    });
  }

  getFoodItemByBudget(restoId, budget) {
    return this.db.list('/fooditems', ref => {
      return ref.orderByChild('Price').startAt(budget.lower).endAt(budget.upper);
    }).valueChanges().map(actions => {
      return actions.filter((action:FoodItem) => {
        return action.restaurantId === restoId
      });
    });
  }

}
