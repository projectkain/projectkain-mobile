import { CallNumber } from '@ionic-native/call-number';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { AuthProvider } from '../providers/auth/auth';
import { RestaurantProvider } from '../providers/restaurant/restaurant';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCG5NS26JPIjiKiadt4LrtcGngvt2AWsfE",
  authDomain: "grubie-af410.firebaseapp.com",
  databaseURL: "https://grubie-af410.firebaseio.com",
  projectId: "grubie-af410",
  storageBucket: "grubie-af410.appspot.com",
  messagingSenderId: "555543238508"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {mode: 'ios'}),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    SplashScreen,
    StatusBar,
    AuthProvider,
    Facebook,
    RestaurantProvider,
    CallNumber,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
