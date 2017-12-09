import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {
  Tab1Root,
  Tab2Root,
  Tab3Root,
  Tab4Root,
  Tab5Root
} from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;

  constructor(private navCtrl: NavController) {}
}
