import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { App } from "ionic-angular/components/app/app";

@Injectable()
export class EventProvider {


  constructor(
    private events: Events,
    private app: App) {
    events.subscribe('featured-restaurant', (restaurant, index) => {
      this.changeTab(index).then(() => {
        this.app.getActiveNavs().pop().popToRoot();
        this.app.getActiveNavs().pop().push('MenuShowcasePage', { restaurant });
      });
    });
  }

  changeTab(index: number) {
    return new Promise(resolve => {
      resolve(this.app.getActiveNavs().pop().parent.select(index));
    })
  }

}
