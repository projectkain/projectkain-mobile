import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(public http: Http, private afAuth: AngularFireAuth) {
    console.log('Hello DatabaseProvider Provider');
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

}
