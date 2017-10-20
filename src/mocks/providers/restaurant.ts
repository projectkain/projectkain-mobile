import { Injectable } from '@angular/core';

import { Restaurant } from '../../models/restaurant';


@Injectable()
export class RestaurantProvider {

  private restaurants: Restaurant[];

  constructor() {
    let restaurants = [
      {
        "name": "Doymeals Eatshop",
        "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Bogart's Bentelog",
        "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Eatsumo Teri Haus",
        "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Big D's Ramen",
        "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Boards UP",
        "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "High Grounds Gourmet",
        "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Fatman Los Banos",
        "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Big Belly's",
        "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Seoul Kitchen",
        "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Bonitos Bar & Restaurant",
        "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      }
    ];

    this.restaurants = restaurants.map((e, id) => {
      return new Restaurant({ ...e, id});
    });

  }

  getOne(id: number) {
    return this.restaurants.filter(e => e.id === id);
  }

  getAll() {
    return this.restaurants;
  }

  getHot() {
    return this.restaurants;
  }

  getNew() {
    return this.restaurants;
  }

  getUpvotes() {
    return this.restaurants;
  }

}
