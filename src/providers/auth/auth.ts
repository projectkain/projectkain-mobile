import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http, public nativeStorage: NativeStorage) {
    console.log('Hello AuthProvider Provider');
  }


  async isLoggedin() {
    try {
      this.nativeStorage.getItem('user');
      return true;
    } catch(e) {
      return false;
    }
  }

}
