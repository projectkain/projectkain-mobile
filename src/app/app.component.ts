import { EventProvider } from './../providers/event/event';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirstRunPage, MainPage } from '../pages/pages';
import { HeaderColor } from '@ionic-native/header-color';

@Component({
  template: `<ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {

  rootPage;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private screen: ScreenOrientation,
    private afAuth: AngularFireAuth,
    private imageLoaderConfig: ImageLoaderConfig,
    private eventProvider: EventProvider,
    private headerColor: HeaderColor) {

    this.imageLoaderConfig.setFallbackUrl('assets/default-logo.png');
    this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
    this.imageLoaderConfig.setConcurrency(10);
    this.imageLoaderConfig.setImageReturnType('base64')

    this.rootPage = MainPage;

    // this.afAuth.authState.subscribe(auth => {
    //   this.rootPage = auth ? MainPage : FirstRunPage;
    // });

    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#352B6A');
      this.headerColor.tint('#352B6A');
      // this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT_PRIMARY);
    });




  }

  ionViewDidLoad() { }
}
