import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { FirstRunPage, MainPage } from '../pages/pages';

@Component({
  template: `<ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {

  rootPage;

  @ViewChild(Nav) nav: Nav;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    public nativeStorage: NativeStorage) {

    this.platform.ready().then(() => {
      this.checkifLoggedIn();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

  async checkifLoggedIn() {
    try {
      await this.nativeStorage.getItem('user');
      this.rootPage = MainPage;
    } catch(e) {
      this.rootPage = FirstRunPage;
    }

  }

  ionViewDidLoad() {
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
