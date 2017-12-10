import { FoodItem } from './foodItem';

export interface Restaurant {
  name:          string;
  id:            string;
  address:       string;
  category:      string;
  contactNumber: string;
  storeHours:    string;
  menu:          FoodItem[];
  url:           string;
  upvotes:       number;
  upvotesRank:   number;
  minPrice?:      number;
  maxPrice?:      number;
}
