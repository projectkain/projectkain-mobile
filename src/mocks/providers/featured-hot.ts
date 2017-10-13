import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class FeaturedHot {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "Doymeals Eatshop",
        "profilePic": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Bogart's Bentelog",
        "profilePic": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Eatsumo Teri Haus",
        "profilePic": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Big D's Ramen",
        "profilePic": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Boards UP",
        "profilePic": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "High Grounds Gourmet",
        "profilePic": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Fatman Los Banos",
        "profilePic": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Big Belly's",
        "profilePic": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Seoul Kitchen",
        "profilePic": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      },
      {
        "name": "Bonitos Bar & Restaurant",
        "profilePic": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
      }

    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
