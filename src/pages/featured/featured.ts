import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeaturedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html',
})
export class FeaturedPage {
  hotList = [
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

  newList = [
    {
      "name": "Anyummmet Bagnet",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "Sure Wings",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "The Plumber's Kitchen",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "BurgerVenture",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "1954 Diners",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "BonChon Chicken",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "Turk's",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "Auntie's Pizza",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "Heneral Ulam",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "Sibling's Bar and Resto",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    }];


  upvotesList = [
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
      "name": "Anyummet Bagnet",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "BonChon Chicken",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "Seoul Kitchen",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    },
    {
      "name": "Turk's",
      "logo": "http://www.whatshappening.com.ph/uploads/2017/03/15/1489564483.jpg",
    }
  ];

  featured: string = 'Hot';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturedPage');
  }

}
