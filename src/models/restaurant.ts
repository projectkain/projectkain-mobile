import { FoodItem } from './foodItem';

export interface Restaurant {
  name:          string;
  id:            string;
  address:       string;
  category:      string;
  contactNumber: string;
  storeHours:    string;
  url:           string;
  upvotes:       number;
  socialmedia:   object[];
}
