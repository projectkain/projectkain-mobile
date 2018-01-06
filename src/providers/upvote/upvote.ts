import { Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { Upvote } from './../../models/upvote';
import { FirebaseApp } from 'angularfire2';



@Injectable()
export class UpvoteProvider {


  constructor(
    private authProvider: AuthProvider,
    private fb: FirebaseApp) {
  }

  getUserUpvotes() {
  }

  getRestaurantUpvotes(id) {
  }

  setUpvote(restoId) {
  }

}
