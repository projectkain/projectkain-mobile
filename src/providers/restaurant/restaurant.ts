import { Injectable } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { FoodItem } from '../../models/foodItem';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class RestaurantProvider {

  private restaurants: Observable<Restaurant[]>;

  constructor(private db: AngularFireDatabase) {
    this.restaurants = db.list('/restaurants').valueChanges();
  }

  getAllRestaurants() {
    return this.restaurants;
  }

  getUpvotesList() {
  }

  getRestaurantsById(ids) {
    return this.db.list('/restaurants').valueChanges().map(actions => {
      return actions.filter((action:Restaurant) => {
        return ids[action.id]? action : undefined;
      });
    });
  }

  getOneRestaurant(id) {
    return this.db.object(`/restaurants/${id}`).valueChanges();
  }

  // getHotList() {
  //
  // }
  //
  // getNewList() {
  //
  // }


}
