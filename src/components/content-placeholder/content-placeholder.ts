import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-placeholder',
  templateUrl: 'content-placeholder.html'
})
export class ContentPlaceholderComponent {
  private cards: any[] = null;
  @Input('count') count;

  constructor() {}

  ngAfterViewInit() {
    this.cards = new Array(parseInt(this.count));
  }

}
