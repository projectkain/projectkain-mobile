import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-content-placeholder',
  templateUrl: 'list-content-placeholder.html'
})
export class ListContentPlaceholderComponent {
  private list: any[] = null;
  @Input('count') count;

  constructor() {
  }

  ngAfterViewInit() {
    this.list = new Array(parseInt(this.count));
  }

}
