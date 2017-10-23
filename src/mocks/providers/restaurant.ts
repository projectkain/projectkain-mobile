import { Restaurant } from './../../models/restaurant';
import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantProvider {

  private restaurants: Restaurant[];

  constructor() {
    let restaurants = [
      {
        "name": "1954 Diners",
        "logo": "../../assets/img/restaurants/1954.png",
        "id": "1954",
        "rank": {
          "hot": 0,
          "newRank": 0,
          "upvotes": 5
        },
        "location": "2F Centtro Mall, Los Banos, Laguna",
        "phone": "(0925) 454 2542"
      },
      {
        "name": "Anyummmet Bagnet",
        "logo": "../../assets/img/restaurants/BAGN.png",
        "id": "BAGN",
        "rank": {
          "hot": 0,
          "newRank": 0,
          "upvotes": 1
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Auntie Pearl's Pizza",
        "logo": "../../assets/img/restaurants/AUNT.png",
        "id": "AUNT",
        "rank": {
          "hot": 0,
          "newRank": 0,
          "upvotes": 8
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Big D's Ramen",
        "logo": "../../assets/img/restaurants/BIGD.png",
        "id": "BIGD",
        "rank": {
          "hot": 4,
          "newRank": 0,
          "upvotes": 4
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Board's UP!",
        "logo": "../../assets/img/restaurants/BUP!.png",
        "id": "BUP!",
        "rank": {
          "hot": 5,
          "newRank": 0,
          "upvotes": 5
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Bogart's Bentelog",
        "logo": "../../assets/img/restaurants/BNTE.png",
        "id": "BNTE",
        "rank": {
          "hot": 2,
          "newRank": 0,
          "upvotes": 2
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Bonchon Chicken",
        "logo": "../../assets/img/restaurants/BONC.png",
        "id": "BONC",
        "rank": {
          "hot": 0,
          "newRank": 6,
          "upvotes": 8
        },
        "location": "",
        "phone": ""

      },
      {
        "name": "Bonito's Bar & Restaurant",
        "logo": "../../assets/img/restaurants/BONI.png",
        "id": "BONI",
        "rank": {
          "hot": 10,
          "newRank": 0,
          "upvotes": 0
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "BurgerVenture",
        "logo": "../../assets/img/restaurants/BRGV.png",
        "id": "BRGV",
        "rank": {
          "hot": 0,
          "newRank": 4,
          "upvotes": 0
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Doymeals Eatshop",
        "logo": "../../assets/img/restaurants/DOYS.png",
        "id": "DOYS",
        "rank": {
          "hot": 1,
          "newRank": 0,
          "upvotes": 1
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Eatsumo Teri Haus",
        "logo": "../../assets/img/restaurants/SUMO.png",
        "id": "SUMO",
        "rank": {
          "hot": 3,
          "newRank": 0,
          "upvotes": 3
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Fatman Los Banos",
        "logo": "../../assets/img/restaurants/FATM.png",
        "id": "FATM",
        "rank": {
          "hot": 7,
          "newRank": 0,
          "upvotes": 0
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Heneral Ulam",
        "logo": "../../assets/img/restaurants/ULAM.png",
        "id": "ULAM",
        "rank": {
          "hot": 0,
          "newRank": 9,
          "upvotes": 0
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "High Grounds Gourmet",
        "logo": "../../assets/img/restaurants/HIGH.png",
        "id": "HIGH",
        "rank": {
          "hot": 6,
          "newRank": 0,
          "upvotes": 6
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Seoul Kitchen",
        "logo": "../../assets/img/restaurants/KPOP.png",
        "id": "KPOP",
        "rank": {
          "hot": 9,
          "newRank": 0,
          "upvotes": 9
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Sibling's Bar and Restaurant",
        "logo": "../../assets/img/restaurants/SIBS.png",
        "id": "SIBS",
        "rank": {
          "hot": 0,
          "newRank": 10,
          "upvotes": 0
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "The Plumber's Kitchen",
        "logo": "../../assets/img/restaurants/PLUM.png",
        "id": "PLUM",
        "rank": {
          "hot": 0,
          "newRank": 3,
          "upvotes": 0
        },
        "location": "",
        "phone": ""
      },
      {
        "name": "Turk's",
        "logo": "../../assets/img/restaurants/TURK.png",
        "id": "TURK",
        "rank": {
          "hot": 0,
          "newRank": 7,
          "upvotes": 10
        },
        "location": "",
        "phone": ""
      },
    ];

    this.restaurants = restaurants.map((e, id) => {
      return new Restaurant({ ...e, id });
    });

  }

  getOne(id: number) {
    return this.restaurants.filter(e => e.id === id);
  }

  getAll() {
    return this.restaurants;
  }

  getHot() {
    return this.sortList(this.restaurants.filter(e => e.rank.hot !== 0));
  }

  getNew() {
    return this.restaurants.filter(e => e.rank.newRank !== 0);
  }

  getUpvotes() {
    return this.restaurants.filter(e => e.rank.upvotes !== 0);
  }

  sortList(list: Restaurant[]) {
    return list.sort(this.compare);
  }

  compare(a, b) {
    if (a.rank.hot < b.rank.hot) {
      return -1;
    }
    else if (a.rank.hot > a.rank.hot) {
      return 1;
    }
  }




}
