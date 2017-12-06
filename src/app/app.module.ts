import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {
  AuthProvider,
} from '../providers/providers';

import { MyApp } from './app.component';

export const firebaseConfig = {
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
    HttpModule,
    IonicModule.forRoot(MyApp, {mode: 'ios'}),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    AuthProvider,
    SplashScreen,
    Facebook,
    AngularFireAuth,
    StatusBar,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
